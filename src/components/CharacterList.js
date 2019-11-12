import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

function CharacterLoop(props) {
  console.log(props);
  const loop = props.characterInfo.rickmorty;
  const searchResults = props.characterInfo.searchResults;

  return (
    <section>
      {(searchResults || loop).map((item, index) => (
        <div class="card">
          <div class="card-body">
            <h1>{item.name}</h1>
            <h3>{item.species}</h3>
            <h3>{item.gender}</h3>
            <h3>{item.origin.name}</h3>

            <Button class="ui primary button">More Info</Button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CharacterLoop;
