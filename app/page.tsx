import Header from "./components/Header"
import Content from "./components/Content"
import List from "./components/List"
import Footer from "./components/Footer"
import main_image from "./assets/main.png"
import Image from "next/image"
import Title from "./components/Title"
import { Menu } from "./types/headerType"

// props理解用に敢えてここに配置　→　headerType.tsxなどに追加してもOK
const menu: Menu[] = [{ label: "ホーム" }, { label: "メッセージ" }, { label: "概要" }]

export default function Example() {
  return (
    <div className="index">
      <Header menu={menu} />
      <div className="page-top">
        <Image src={main_image} alt="" fill className="style.main_image" />
      </div>
      <div className="news">
        <Title title="ニュース" />
        <Content />
      </div>
      <List />
      <Footer />
    </div>
  )
}
