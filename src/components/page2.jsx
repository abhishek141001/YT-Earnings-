import React from "react";

function Page2(){
    return(
        <div className="page2">
            <div className="container2">
                <div className="thumbnailFull">
                <div className="thumbnailTop">
                    <img className="thumbnailTopImg" src="/img/thumbnailtop.png" alt="img"/>
                     <p className="thumbnailTopText">Top earner video</p>
                </div>
                <img className="thumbnailImg" src="/img/gt3rs.jpeg" alt="thumbnail"/>
                <p className="thumbnailBottom">Uploaded on  - June 23, 2023</p>
                </div>
                <div className="nameCount">
                    <h4 className="videoTitle">best video</h4>
                    <div className="countBox">
                        <img className="likeCommentIcon" src="/img/eye.png"/>
                        <p className="count">1000</p>
                    </div>
                    <div className="countBox">
                        <img className="likeCommentIcon" src="/img/thumbsup.png" />
                        <p className="count">1000</p>
                    </div>
                    <div className="countBox">
                        <img className="likeCommentIcon" src="/img/comment.png"/>
                        <p className="count">1000</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Page2;