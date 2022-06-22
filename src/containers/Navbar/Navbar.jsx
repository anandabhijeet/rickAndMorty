import React from "react";
import "./Navbar.css";

const Navbar = ({ setSearch, setStatus, setSpecies, setType, setGender }) => {
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
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Status
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="form-check dropdown-item ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="dead"
                  onChange={(e)=>setStatus(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios1">
                  Dead
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="alive"
                  onChange={(e)=>setStatus(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Alive
                </label>
              </div>
              <div className="dropdown-divider"></div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="unknown"
                  onChange={(e)=>setStatus(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Unknown
                </label>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Species
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Alien"
                  onChange={(e)=>setSpecies(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Alien
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Human"
                  onChange={(e)=>setSpecies(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Human
                </label>
              </div>
              
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Type
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Genetic experiment"
                  onChange={(e)=>setType(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Gentic Experiment
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Superhuman"
                  onChange={(e)=>setType(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  SuperHuman
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Parasite"
                  onChange={(e)=>setType(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Parasite
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Mytholog"
                  onChange={(e)=>setType(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Mythology
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Human with antennae"
                  onChange={(e)=>setType(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Human with antenna
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="Human with ants in his eyes"
                  onChange={(e)=>setType(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Human with ant in his eyes
                </label>
              </div>
              <div className="dropdown-divider"></div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="unknown"
                  onChange={(e)=>setType(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Other
                </label>
              </div>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Gender
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="female"
                  onChange={(e)=>setGender(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Female
                </label>
              </div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="male"
                  onChange={(e)=>setGender(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Male
                </label>
              </div>
              <div className="dropdown-divider"></div>
              <div class="form-check dropdown-item  ml-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="unknown"
                  onChange={(e)=>setGender(e.target.value)}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Unknown
                </label>
               
              </div>
            </div>
          </li>

          <div className="favourite-button ml-1">
            <p className="my-0">favourites</p>
          </div>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
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
