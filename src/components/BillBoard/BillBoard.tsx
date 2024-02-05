import React from "react"

interface BillBoardProps {
  children: React.ReactNode
}

const BillBoard = ({ children }: BillBoardProps) => {
  return (
    <>
      <h2>Billboard</h2>
      <div className="BillBoard__frame">
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
