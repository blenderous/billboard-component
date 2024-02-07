import React, { useEffect, useRef } from "react"
import "./BillBoard.css"

interface BillBoardProps {
  interval: number
  children: React.ReactNode
}

const BillBoard = ({ interval, children }: BillBoardProps) => {
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (frameRef.current) {
      const children = frameRef.current.children
      let current = 0
      const max = children.length - 1
      setInterval(() => {
        const previous = current === 0 ? max : current - 1
        children[previous].classList.remove("active")
        children[current].classList.add("active")
        if (current < max) {
          current += 1
        } else {
          current = 0
        }
      }, interval)
    }
  }, [])

  return (
    <>
      <h2>Billboard</h2>
      <div
        className="BillBoard__frame"
        ref={frameRef}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="BillBoard__item"
          >
            {child}
          </div>
        ))}
      </div>
    </>
  )
}

export default BillBoard
