import Container from './components/Container'
import Placeholder from './assets/placeholder1.png'
import Story from './components/Story'
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';



const newsStories = [
  { title: "In ut lacinia odio", image: Placeholder },
  { title: "Donec consectetur", image: Placeholder },
  { title: "augue metus eleifend", image: Placeholder },
];  

//<Container newsItems={newsStories} />

function App() {
  

  // <nav className="news-nav">
  //           <a href="#">News</a>
  //           <a href="#">Sports</a>
  //           <a href="#">Weather</a>
  //           <a href="#">Live</a>
  //           <a href="#">Sounds</a>
  //         </nav>

  return (
    <>
      <Header />
      <div>
          <HashRouter>
            <nav className="news-nav">
              <Link className='site-nav' to="/">Home</Link>
              <Link className='site-nav' to="/Story">About</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Container newsItems={newsStories} />} />
              <Route path="/Story" element={<Story newsItems={newsStories}/>} />
            </Routes>
          </HashRouter>
      </div>
      
    </>
  )
}

export default App
