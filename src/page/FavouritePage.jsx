import React from "react";
import Footer from "../containers/Footer/Footer";
import { useSelector } from "react-redux";
import "../page/FavouritePage.css";
import Card from "../containers/cards/Card";
const FavouritePage = () => {
    const favouritescharacters = useSelector((state)=>state.favourites.favouriteChars);
    console.log("fav",favouritescharacters);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-4">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      <div className="favourites-section">
        <div className="container fav-container mt-5 py-3 ">
        {favouritescharacters?favouritescharacters.map(char=>{
            return(<div key={char.id}>
                <Card character={char}/>
            </div>)
        }):<div><h1>loading</h1></div>}
        </div>
         </div>
      <Footer />
    </div>
  );
};

export default FavouritePage;
