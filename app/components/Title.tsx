import React from "react"

const Title = ({ title }: { title: string }) => {
  return (
    <div className="title">
      <p>{title}</p>
    </div>
  )
}

export default Title
