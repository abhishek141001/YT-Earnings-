import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Page1(){
    const [youtubeLink,setYoutubeLink] = useState("")
    const [videoId,setVideoId] = useState("")
    const navigate = useNavigate();
    const extractString = (url) => {
        const lastSlashIndex = url.lastIndexOf('/');
        const questionMarkIndex = url.lastIndexOf('?');
      
        if (lastSlashIndex !== -1 && questionMarkIndex !== -1 && lastSlashIndex < questionMarkIndex) {
          return url.substring(lastSlashIndex + 1, questionMarkIndex);
        }
      
        return ''; // Return an empty string if pattern not found or invalid
      };


const handleChange = (e)=>{
    
setYoutubeLink(e.target.value)
}
const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(youtubeLink)
   
    setVideoId(extractString(youtubeLink))
    console.log(videoId)
   
     
}
useEffect(() => {
    if (videoId) {
      navigate(`/page2?videoId=${encodeURIComponent(videoId)}`);
    }
  }, [videoId, navigate]);


    return(
        <>
        <div className="page1">
        <div className="containerBox1">
            <h3 className="headingLine">Discover your earning potential</h3>
            <p className="subHeading">Turn your Youtube expertise into a lucrative income
through resource sharing</p>
<div className="searchBox">
    <img className="youtubeImg" src="/img/youtube.png" alt="youtubeImg"/>
    <form onSubmit={handleSubmit}>
    <input className="inputLink" placeholder="enter youtube video link" type="text" onChange={handleChange}/>
    <button className="linkButton" type="submit">Check Earning</button>
    </form>
</div>
        </div>
        
        </div>
        <div className="playBox">
        <div className="playbg">
            <img className="playbgImg" src="/img/playbg.png" alt="img"/>
        </div>
        </div>
        </>
    )
}
export default Page1;