import React, { useState } from "react";
import CharacterLoop from "./CharacterList";
import { program } from "@babel/types";

export default function SearchForm(props) {
  console.log(props.characterInfo);

  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.searchCharacters(query);
  };

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <fieldset className="form-group">
          <input
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="search"
          />
        </fieldset>
      </form>
    </section>
  );
}
