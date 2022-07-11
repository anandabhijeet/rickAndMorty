import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tilt from "react-tilt";
import { addToFav, isFav, isNotFav, removeFromFav } from "../../Redux/Actions/Action";
import "./Card.css";
const Card = (character) => {
  const { id, image, name, status, species, gender, type } = character.character; 
  const is_Fav = useSelector(state=>state.favourites.favouriteChars);
  const inFav = is_Fav.findIndex(el=>el.id === id);
  let isFav = true;

  if(inFav === -1){isFav = false};
  const [like, setLike] = useState(isFav);
  
  console.log("fav",is_Fav);
  const dispatch = useDispatch();
  
  const checkFavourite =()=>{
    //
    // if(inFav){setLike(true)}
    
  }

  
  const add_to_Fav = () => {
    dispatch(addToFav(character.character));
   
    setLike(true);
  };

  const remove_fromFav = () => {
    dispatch(removeFromFav(id));
   
    setLike(false);
  };
  return (
    <Tilt>
      <div className="Card">
        <div className="img-container">
          <img src={image} alt="rick" />
        </div>
        <h2>{name}</h2>

        <div className="favourite-section">
          <p>
            {gender === "Male"
              ? `He is ${species} and ${status}`
              : `She is ${species} and ${status}`}
          </p>

          <div className="favourite">
            <i
              className={like? "fa fa-heart like-button" : "fa fa-heart"}
              onClick={() => {
                console.log("heart");
                like ? remove_fromFav() : add_to_Fav();
              }}
            ></i>
          </div>
        </div>
        <p>Type : {type}</p>
      </div>
    </Tilt>
  );
};

export default Card;
