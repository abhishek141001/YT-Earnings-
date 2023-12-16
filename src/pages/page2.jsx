import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function Page2() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [videoId, setVideoId] = useState("")
    const [videoData, setVideoData] = useState(null);
    const [videTitle, setVideoTitle] = useState("")
    const [videoLike, setVideoLike] = useState("")
    const [videoCommentCount, setVideoCommentCount] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [viewCount, setViewCount] = useState("")
    const [channelId, setChannaelId] = useState("");
    const [subscriber, setSubscriber] = useState()
    const [progress, setProgress] = useState(10)
    const[totalEarning,setTotalEarning] = useState("")


    const apiKey = "AIzaSyCfnpoNb0F2qMuWX0YXgEVi85s5HBJNKkg"

    useEffect(() => {

        const id = params.get("videoId");
        setVideoId(id)
        // setProgress(20)

    }, [params])


    useEffect(() => {

        const getData = async () => {

            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`, {
                    headers: {

                        Accept: "application/json",
                    },
                })
                if (response.ok) {
                   
                    const data = await response.json();
                    setVideoData(data);
                    setVideoTitle(data.items[0].snippet.title)
                    setThumbnail(data.items[0].snippet.thumbnails.default.url)
                    setVideoLike(data.items[0].statistics.likeCount)
                    setVideoCommentCount(data.items[0].statistics.commentCount)
                    setViewCount(data.items[0].statistics.viewCount)
                    setChannaelId(data.items[0].snippet.channelId)

                    setProgress(60)
                    console.log(channelId);
                } else {
                    throw new Error("Failed to fetch data");
                }

            }
            catch (err) {
                console.log(err)
            }
        }
        if (videoId) {
            getData();
        }

    }, [videoId]);


    useEffect(() => {
        const getChannelData = async () => {
            

            try {
                const channelResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${apiKey}`, {
                    headers: {

                        Accept: "application/json",
                    },
                })
                if (channelResponse.ok) {
                    
                    const channelData = await channelResponse.json();
                    console.log(channelData)
                    setSubscriber(channelData.items[0].statistics.subscriberCount)
                    // setProgress(90)

                } else {
                    throw new Error("Failed to fetch data");
                }

            }
            catch (err) {
                console.log(err)
            }
        }
        if (channelId) {

        }
        getChannelData();
        const newTotalEarning = Math.min(parseInt(subscriber), parseInt(viewCount)) + 10 * parseInt(videoCommentCount) + 5 * parseInt(videoLike);
    setTotalEarning(newTotalEarning);
    setProgress(100)

    }, [channelId, subscriber, viewCount, videoCommentCount, videoLike])
    


        
       
        
 
    





    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
          
         {progress===0?  <div className="page2">
                <div className="container2">
                    <div className="thumbnailFull">
                        <div className="thumbnailTop">
                            <img className="thumbnailTopImg" src="/img/thumbnailtop.png" alt="img" />
                            <p className="thumbnailTopText">Top earner video</p>
                        </div>
                        <img className="thumbnailImg" src={thumbnail} alt="thumbnail" />
                        <p className="thumbnailBottom">Uploaded on  - June 23, 2023</p>
                    </div>
                    <div className="nameCount">
                        <h4 className="videoTitle">{videTitle}</h4>
                        <div className="countBox">
                            <img className="likeCommentIcon" src="/img/eye.png" />
                            <p className="count">{viewCount}</p>
                        </div>
                        <div className="countBox">
                            <img className="likeCommentIcon" src="/img/thumbsup.png" />
                            <p className="count">{videoLike}</p>
                        </div>
                        <div className="countBox">
                            <img className="likeCommentIcon" src="/img/comment.png" />
                            <p className="count">{videoCommentCount}</p>
                        </div>

                    </div>
                    <div className="earningBox">
                        <div className="earningInsideBox">
                            <p className="totalEarning"><img className="rupee" src="/img/rupee.png" />{totalEarning}</p>
                            <button className="earningButton">Check out</button>
                        </div>

                    </div>
                </div>
            </div>:<div className="page2 loading" ></div>}
        </>
    )
}
export default Page2;