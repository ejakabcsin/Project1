import "../index.css"
import Placeholder1 from '../assets/placeholder1.png'
import { Link } from "react-router-dom";


// Type definitions
type NewsItem = { //NewsItem Prop
    title: string; 
    image: string;
  };
  
  type NewsProps = {
    newsItems: NewsItem[]; //Creating an array with the prop
  };
  
  export default function NewsPage({ newsItems }: NewsProps) {
    return (
      <div className="news-page">
        

  
        {/* Main Content */}
        <main className="news-main">
          {/* Featured Story */}
          <div className="news-featured">
            <img src={Placeholder1} alt="Featured Story" className="news-featured-image" />
            <h1 className="news-featured-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p className="news-featured-description">Mauris gravida lacus urna, vitae mollis est dignissim nec. Donec dolor risus, elementum id eleifend et, suscipit eu leo.</p>

            {/* {newsItems.map((item, index) => (
            <div key={index} >
              <img src={item.image} alt={item.title} className="news-featured-image" />
              <h1 className="news-featured-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p className="news-featured-description">Mauris gravida lacus urna, vitae mollis est dignissim nec. Donec dolor risus, elementum id eleifend et, suscipit eu leo.</p>

            </div>
          ))} */}

          </div>
  
          {/* Sidebar */}
          <aside className="news-sidebar">
            <h2 className="news-sidebar-title">Trending</h2>
            <ul className="news-sidebar-list">
              <li>Sed ac tincidunt erat.</li>
              <li>Praesent vitae pellentesque lorem.</li> 
              <li>In ac aliquet tellus.</li>
            </ul>
          </aside>
        </main>
  
        {/* News Grid */}
        <section className="news-news-grid">
          {newsItems.map((item, index) => (
            <Link to="/story"> <div key={index} className="news-news-card">
            <img src={item.image} alt={item.title} className="news-news-card-image" />
            <div className="news-news-card-content">
              <h3 className="news-news-card-title">{item.title}</h3>
            </div>
          </div></Link>
          ))}
        </section>
  
        {/* Footer */}
        <footer className="news-footer">
          <p>&copy; 2025</p>
        </footer>
      </div>
    );
  }
  