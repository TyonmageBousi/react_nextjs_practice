"use client";

import React, { useState } from 'react';


export default function Content() {
    type Content = {
        date: string,
        news: string
    }


    const [value, setValue] = useState<Content>({
        date: "",
        news: ""
    })

    const [contents, setContent] = useState<Content[]>([])

    const up = () => {
        setContent([...contents, value])
        setValue({
            date: "",
            news: ""
        })
    }
    return (
        <div>
            <p>日付を入れてください</p>
            <input name="date" value={value.date} onChange={(e) => setValue({ ...value, date: e.target.value })} />
            <p>投稿内容を入れてください</p>
            <input name="news" value={value.news} onChange={(e) => setValue({ ...value, news: e.target.value })} />
            <button onClick={up}>投稿する</button>
            <ul>
                {contents.map((content) =>
                    <li>
                        <div>{content.date}</div>
                        <div>{content.news}</div>
                    </li>)}
            </ul>
        </div>
    )
}