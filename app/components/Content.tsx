"use client"

import React, { useState } from "react"

export default function Content() {
  type Content = {
    id: number
    date: string
    news: string
  }

  const [value, setValue] = useState<Content>({
    id: 1,
    date: "",
    news: "",
  })

  const [contents, setContent] = useState<Content[]>([])

  const handleSubmit = () => {
    setContent([...contents, value])
    setValue({
      id: +1,
      date: "",
      news: "",
    })
  }
  return (
    <div className="content">
      <p>日付を入れてください</p>
      <input name="date" value={value.date} onChange={(e) => setValue({ ...value, date: e.target.value })} />
      <p>投稿内容を入れてください</p>
      <input name="news" value={value.news} onChange={(e) => setValue({ ...value, news: e.target.value })} />
      <button onClick={handleSubmit}>投稿する</button>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <div>{content.date}</div>
            <div>{content.news}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
