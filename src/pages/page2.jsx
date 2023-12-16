import React, { useEffect, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import AllVideos from "../components/allVideos";

export default function Page2() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const [videoId, setVideoId] = useState("")
    const [videoData, setVideoData] = useState(null);
    const [videoTitle, setVideoTitle] = useState("")
    const [videoLike, setVideoLike] = useState("")
    const [videoCommentCount, setVideoCommentCount] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [viewCount, setViewCount] = useState("")
    const [channelId, setChannaelId] = useState("");
    const [subscriber, setSubscriber] = useState()
    const [progress, setProgress] = useState(10)
    const[totalEarning,setTotalEarning] = useState("")
    const [allVideoArray, setAllVideoArray] = useState(() => {
        // Load data from localStorage if available
        const storedVideos = localStorage.getItem('videos');
        return storedVideos ? JSON.parse(storedVideos) : [];
    });
    // const allVideosArray = []
    const handleBack = ()=>{
        if (videoTitle && videoLike && videoCommentCount && viewCount && totalEarning && thumbnail) {
            const newVideo = {
                videoTitle,
                videoLike,
                videoCommentCount,
                viewCount,
                totalEarning,
                thumbnail
            };
            setAllVideoArray(prevArray => {
                const updatedArray = [...prevArray, newVideo];
                // Save updated data to localStorage
                localStorage.setItem('videos', JSON.stringify(updatedArray));
                return updatedArray;
            });
           
    }
    navigate("/")
}

   

    useEffect(() => {

        const id = params.get("videoId");
        setVideoId(id)
        // setProgress(20)

    }, [params])


    useEffect(() => {
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
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
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
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
                   
                    <img className="back" src="/img/arrow.png" onClick={handleBack}/>
                        <div className="thumbnailTop">
                            <img className="thumbnailTopImg" src="/img/thumbnailtop.png" alt="img" />
                            <p className="thumbnailTopText">Top earner video</p>
                        </div>
                        <img className="thumbnailImg" src={thumbnail} alt="thumbnail" />
                        <p className="thumbnailBottom">Uploaded on  - June 23, 2023</p>
                    </div>
                    <div className="nameCount">
                        <h4 className="videoTitle">{videoTitle}</h4>
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
            {progress===0? <AllVideos 
                allVideosArray={allVideoArray} 
                 />:<div></div>}
           
        </>
    )
}
    
