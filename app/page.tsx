
import Header from './components/Header';
import Page_top from './components/Page_top';
import Content from './components/Content';
import List from './components/List';
import Footer from './components/Footer';




export default function Example() {
  return (
    <div className="index">
      <Header />
      <Page_top /> 
        <Content />
      <div className="list">
        <List />
      </div>
      <Footer />
      <p>@START</p>
    </div>
  );
}

