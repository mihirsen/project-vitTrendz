import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/style.css';


const Left = () => {

  const [photoCaptured, setPhotoCaptured] = useState(false);
 
  let videoRef = useRef(null)

  let photoRef = useRef(null)

  const getUserCamera = () => {
    navigator.mediaDevices.getUserMedia({
      video:true
    })
    .then((stream) => {

      let video = videoRef.current
      video.srcObject = stream
      video.play()
    })
    .catch((error) =>{
      console.error(error)
    })
  }

  const takePicture = () => {
    let width = 400

    let height = width / (16/9)

    let photo = photoRef.current

    let video = videoRef.current
    console.log(photo)

    photo.width = width

    photo.height = height

    let ctx = photo.getContext('2d')
    ctx.drawImage(video,0,0,photo.width,photo.height)
    
    setPhotoCaptured(true);

  }
  
  useEffect(() => {
    getUserCamera()
  },[videoRef])

  return (
    <div className='Left'>
        <div className='container'>
          <div className='smile'>Smile</div>
        <canvas 
          style={{
            display: photoCaptured ? 'block':'none'
          }} 
          className='container1' 
          ref={photoRef}></canvas>
        <video style={{
            display: photoCaptured ? 'none':'block'
        }} 
        className='container2' 
        ref={videoRef}>
        </video>
          <button className='clickpic' onClick={takePicture}>Take Pic</button> <br/>
          <button className='reset' onClick={() => window.location.reload(false)}>Reset everything</button>
       </div>
    </div>
  )
}

export default Left