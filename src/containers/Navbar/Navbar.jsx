import React from "react";
import { useDispatch } from "react-redux";
import { searchedCharacters, setGender, setSpecies, setStatus, setType } from "../../Redux/Actions/Action";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-4">
      <a className="navbar-brand" href="#">
        Rick And Morty
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ml-auto">
          <li className="nav-item ml-2">
            <select
              className=" custom-select"
              onChange={(e) => {
                dispatch(setStatus(e.target.value))
              }}
            >
              <option className="d-none">Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </li>

          <li className="nav-item ml-2">
            <select
              className=" custom-select"
              onChange={(e) => {
                dispatch(setSpecies(e.target.value))
              }}
            >
              <option className="d-none">Species</option>
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
            </select>
          </li>
          <li className="nav-item ml-2">
            <select
              className=" custom-select"
              onChange={(e) => {
                dispatch(setType(e.target.value))
              }}
            >
              <option className="d-none">Type</option>
              <option value="Genetic experiment">Genetic experiment</option>
              <option value="Superhuman (Ghost trains summoner)">Superhuman (Ghost trains summoner)</option>
              <option value="Parasite">Parasite</option>
              <option value="Human with antennae">Human with antennae</option>
              <option value="Human with ants in his eyes">Human with ants in his eyes</option>
              <option value="Mytholog">Mytholog</option>
              <option value="Bepisian">Bepisian</option>
              <option value="unknown">Unknown</option>
            </select>
          </li>

          <li className="nav-item ml-2">
            <select
              className=" custom-select"
              onChange={(e) => {
                dispatch(setGender(e.target.value))
              }}
            >
              <option className="d-none">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unknown">Unkown</option>
            </select>
          </li> 

         <Link to={'./favourite'}> <li className="nav-item ml-2">
            <button type="button" className="btn btn-outline-light">
            <i className="fa fa-heart"></i>
            </button>
          </li></Link>
          <li className="nav-item ml-2">
            <button type="button" className="btn btn-outline-light">
            <i className="fa fa-refresh"></i>
            </button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              dispatch(searchedCharacters(e.target.value));
            }}
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
