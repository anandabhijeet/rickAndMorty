import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/App.css";
import Card from "./containers/cards/Card";
import Footer from "./containers/Footer/Footer";
import Navbar from "./containers/Navbar/Navbar";
import Pagination from "./containers/Pagination/Pagination";

const App = () => {
  const [characters, setCharacters] = useState([]); 
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
 
  const api = `https://rickandmortyapi.com/api/character?page=${pageCount}&name=${search}&status=${status}&species=${species}&type=${type}&gender=${gender}`;

  const getAllCharcters = async () => {
    const response = await axios
      .get(api) 
      .catch((err) => console.log(err));
    const res = response.data.results;
    setCharacters(res);
  };

  useEffect(()=>{ 
    getAllCharcters()

  }, [" ",api])

  return (
    <div className="App">
      <Navbar setStatus={setStatus} setType={setType} setSpecies={setSpecies} setGender={setGender} setSearch={setSearch} />
    <div className= "container app-container mt-5 py-3">
    {
      characters?characters.map((character, index)=>{
        return (
          <Card key={index} image={character.image} gender={character.gender} species={character.species} name={character.name} status={character.status} type={character.type} />
        ) 
      }): <div><h1>loading...</h1></div>
     }
    </div>

      <Pagination pageCount={pageCount} setPageCount={setPageCount}/>
      <Footer />
    </div>
  );
};

export default App;
