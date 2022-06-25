import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Tilt from "react-tilt";
import { addToFav, removeFromFav } from "../../Redux/Actions/Action";
import "./Card.css";
const Card = (character) => {
  const { id, image, name, status, species, gender, type } = character.character; 
  console.log("data",character)
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  const add_to_Fav = () => {
    dispatch(addToFav(character.character))
    console.log("addtofav");
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
              className={like ? "fa fa-heart like-button" : "fa fa-heart"}
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
