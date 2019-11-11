import React from "react";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <div className="PicContainer">
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <img 
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="morty"
          />
              <img 
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
          alt="summer"
          />
              <img 
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
          alt="beth"
          />
              <img 
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          alt="jerry"
          />
          </div>
      
          
      </header>
    </section>
  );
}
