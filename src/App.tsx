import { useEffect, useRef, useState } from "react"
import "./App.css"
import BillBoard from "./components/BillBoard"

function App() {
  return (
    <>
      <BillBoard interval={2000}>
        <video
          autoPlay={true}
          muted={true}
          loop={true}
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
        <p style={{ fontSize: "36px" }}>
          Some random text that appears in a slide of the carousal
        </p>
      </BillBoard>
    </>
  )
}

export default App
