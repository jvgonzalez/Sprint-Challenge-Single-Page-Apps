import React, { useEffect, useState } from "react";

// export default function CharacterList() {
//   // TODO: Add useState to track data from useEffect

//   useEffect(() => {
//     // TODO: Add API Request here - must run in `useEffect`
//     //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
//   }, []);

//   return (
//     <section className="character-list">
//       <h2>TODO: `array.map()` over your state here!</h2>
//     </section>
//   );
// }

  function CharacterLoop(props) {
    console.log(props);
    const loop = props.characterInfo.rickmorty.map(i => i);

    return (
      <section>
        {loop.map((item, index) => (
          <div class="card">
            <div class="card-body">
              <h1>{item.name}</h1>
              <h3>{item.species}</h3>
              <h3>{item.gender}</h3>
              <h3>{item.origin.name}</h3>
            </div>
          </div>
        ))}
      </section>
    );
  }


  export default CharacterLoop;