import React, { useEffect} from "react";
import axios from "axios";
import "../src/App.css";
import Card from "./containers/cards/Card";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import Pagination from "./containers/Pagination/Pagination";
import { setAllCharacters } from "./Redux/Actions/Action"; 

const HomePage = () => {
    const dispatch = useDispatch();
    const allCharacters = useSelector((state) => state.allCharacter.characters);
    const pageNumber = useSelector((state) => state.pageNumber);
    const text_search = useSelector((state) => state.searchingChar.text_search);
    const status = useSelector((state)=>state.filterSta.status);
    const species = useSelector((state)=>state.filterSpe.species);
    const gender = useSelector((state)=>state.filterGen.gender);
    const type = useSelector((state)=>state.filterTyp.type);
    
    
    const api = `https://rickandmortyapi.com/api/character?page=${pageNumber || ""}&status=${status || ""}&gender=${gender||""}&species=${species || ""}&type=${type || ""}&name=${text_search || ""}`;
  
    const getAllCharcters = async () => {
      const response = await axios
        .get(api)
        .catch((err) => console.log(err.message));
      const res = response.data.results;
      console.log("res", res);
      dispatch(setAllCharacters(res));
    };
  
    useEffect(() => {
      getAllCharcters();
    }, [" ", api]);
  
  
    return (
      <div className="App">
        <Navbar/>
        <div className="container app-container mt-5 py-3">
          {allCharacters.length ? allCharacters?.map((character, index) => {
              return ( 
               <div key={character.id}>
                 <Card
                 character = {character}
               />
               </div>
              );
            })
           : 
           <div className="container app-container mt-5 py-3">
           <div style={{color:"#fff",  display:"flex", alignItems:"center" }} > <h1>Loading...</h1></div>
          </div>
            
          }
        </div>
  
        <Pagination />
        <Footer />
      </div>
    );
}

export default HomePage