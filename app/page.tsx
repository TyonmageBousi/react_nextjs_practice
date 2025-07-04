
import Header from './components/Header';
import Content from './components/Content';
import List from './components/List';
import Footer from './components/Footer';
import main_image from './assets/main.png'
import Image from 'next/image';



export default function Example() {
  return (
    <div className="index">
      <Header />
      <div className="page-top" >
        <Image src={main_image} alt='' fill className='style.main_image' />
      </div>
      <div className="news">
        <div className="title">
          <p>ニュース</p>
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
      <div className="list">
        <List />
      </div>
      <Footer />
      <p>@START</p>
    </div>
  );
}

