import React from "react"
import { Menu } from "../types/headerType"

export default function Header({menu}: {menu:Menu[]}) {


  return (
    <div>
      <header>
        <h1>ちょんまげ</h1>
        <ul>
          {menu.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </header>
    </div>
  )
}
