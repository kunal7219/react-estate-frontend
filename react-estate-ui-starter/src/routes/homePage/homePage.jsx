import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1>Find Real Estate & Get Your Dream Place</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum iste nulla. Excepturi soluta ab mollitia est voluptas vero at ipsa, culpa laboriosam libero cupiditate labore sed aliquid laborum quasi. Harum libero neque laudantium quod tenetur odio pariatur accusantium earum labore officiis ipsam deleniti dolorum ipsum.</p>
            <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="../../bg.png"></img>
        </div>
    </div>
  );
}

export default HomePage;