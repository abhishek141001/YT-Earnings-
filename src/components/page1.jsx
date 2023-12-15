import React, { useState } from "react";

function Page1(){
    const [youtubeLink,setYoutubeLink] = useState("")


const handleChange = (e)=>{
    
setYoutubeLink(e.target.value)
}
const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(youtubeLink)
     
}


    return(
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
        <div className="playbg">
            <img className="playbgImg" src="/img/playbg.png" alt="img"/>
        </div>
        </div>
    )
}
export default Page1;