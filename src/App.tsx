import { useEffect, useRef, useState } from "react"
import "./App.css"
import BillBoard from "./components/BillBoard/BillBoard"

function App() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play()
    }
  }, [])

  return (
    <>
      <BillBoard>
        <video
          ref={videoRef}
          width="400"
        >
          <source
            src="/videos/BigBuckBunnySample2.mp4"
            type="video/mp4"
          />
        </video>
        <img
          width="400"
          src="/images/fabien-bellanger-zKFoVBS_WGE-unsplash.jpg"
          alt="Sea view"
        />
        <p>Some random text that appears in a slide of the carousal</p>
      </BillBoard>
    </>
  )
}

export default App
