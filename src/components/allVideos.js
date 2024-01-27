import React from 'react'

export default function AllVideos({allVideosArray}) {
  return (
    <>
    <p className='otherVideo'>Other Videos Potentials</p>
    <div className='otherVideobox'>
     
    <div className='labelBox'>
      <h3 className='listLable'>Title</h3>
      <h3 className='listLable'>Thumbnail</h3>
      <h3 className='listLable'>Likes</h3>
      <h3 className='listLable'>Comments</h3>
      <h3 className='listLable'>Views</h3>
      <h3 className='listLable'>Earnings</h3>
      </div>
      
      <div className='videoBox'>
      {allVideosArray.map((video,index) => (
        <div key={index} className='videoList'> 
        <h3 className='listLike'>{video.videoTitle}</h3>
        <img className='listLike' src={video.thumbnail}/>
        <p className='listLike'>{video.videoLike}</p>
        <p className='listLike leftMargin'>{video.videoCommentCount}</p>
        <p className='listLike'>{video.viewCount}</p>
        <p className='listLike'>{video.totalEarning}</p>
        
        </div>
      ))}
      </div>
    </div>
    </>
  )
}
