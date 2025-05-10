import "../index.css"
import Placeholder1 from '../assets/placeholder1.png'


type NewsItem = { //NewsItem Prop
    title: string; 
    image: string;
  };
  
  type NewsProps = {
    newsItems: NewsItem[]; //Creating an array with the prop
  };
  
  export default function Story({ newsItems }: NewsProps) {
    return (
      <div className="news-page">
  
        {/* Main Content */}
        <main className="news-main-story">
          {/* Featured Story */}
          <div className="news-featured">
            <img src={Placeholder1} alt="Featured Story" className="news-featured-image-story" />
            <h1 className="news-featured-title-story">About us</h1>
            <p className="news-featured-description-story">Mauris gravida lacus urna, vitae mollis est dignissim nec. Donec dolor risus, elementum id eleifend et, suscipit eu leo.</p>
            
            <p className="news-article-content">This is a fake news site with a fake about page! This is simply to prove that routers work, and that I can set one up. I have yet to figure out how to set up a link to each story. This file is named Story.tsx, but this is misleading!!!!!
            </p>

            <p className="news-article-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec sem vel felis mollis congue quis id ex. Nullam efficitur augue a orci pharetra iaculis. Curabitur ut augue quis felis laoreet tincidunt eget vitae elit. Curabitur eget pharetra arcu. Vestibulum maximus lectus consectetur tellus lacinia, at tincidunt lorem consectetur. Ut tempus vitae dolor nec semper. Etiam ornare dignissim tellus vitae tempus. Morbi facilisis quam turpis, ac tristique ex suscipit sed. Integer metus nibh, malesuada sit amet nisi ac, pulvinar ultricies lectus. Nulla in purus viverra, laoreet nibh eget, finibus lectus. Vestibulum sem elit, sagittis vel consequat eu, hendrerit nec libero. Donec et dui porta libero mollis lobortis. Aenean non ultricies sem, a ornare libero. Etiam eget neque semper massa lobortis lacinia.
            </p>

            <p className="news-article-content"> Cras feugiat mauris id efficitur scelerisque. Praesent tempus nec tellus vel dignissim. Donec nunc nisl, elementum a eros at, condimentum lacinia nibh. Nam ac ex quam. Nunc faucibus velit id nunc mattis, ut commodo ex cursus. Aenean sodales rhoncus purus id maximus. Nunc eu tempus felis. Morbi ac lacus aliquet, tristique sem vel, efficitur tellus. Integer vel consectetur ante, gravida vestibulum dolor. Donec porttitor nibh sed dignissim tincidunt.</p>

            <p className="news-article-content">Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Fusce porta turpis eget diam tempus, et luctus neque imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu sollicitudin quam. In sit amet nisl quis sapien laoreet feugiat id ut tortor. Proin quis facilisis nisl, id porttitor orci.</p>
          </div>

          </main>
  
          
  
        {/* Footer */}
        <footer className="news-footer">
          <p>&copy; 2025</p>
        </footer>
      </div>
    );
  }