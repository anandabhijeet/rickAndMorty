import React, {useState} from "react";
import Tilt from "react-tilt";
import "./Card.css";
const Card = ({ image, name, status, species, gender, type }) => {
    const [like, setLike] = useState(false);
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
            <i className={like?"fa fa-heart like-button":"fa fa-heart"} onClick={()=>{
                like?setLike(false):setLike(true)
            }}></i>
          </div>
         
        </div>
        <p>Type : {type}</p>
      </div>
    </Tilt>
  );
};

export default Card;
