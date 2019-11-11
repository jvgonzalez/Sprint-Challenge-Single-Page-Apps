import React, { Component } from "react";
import Header from "./components/Header.js";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CharacterLoop from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";


class App extends Component {
  constructor() {
    super();
    this.state = {
      rickmorty: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://rickandmortyapi.com/api/character/")
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ rickmorty: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return(
      <div>
        <Header />

        

        <Route path="/characters"
        render= {props => <CharacterLoop {...props} characterInfo={this.state} />}
        />

        <Route exact path="/" component={WelcomePage} />

        <Link
              style={{
                
                color: "green",
                marginLeft: "40%",
                fontSize: "2em",
                textAlign: "center",
                
                
                
              }}
              to="/characters"
            >
              {" "}
             Get to know the characters
        </Link>

        <SearchForm />






        


      </div>
    )
  }
}

export default App;