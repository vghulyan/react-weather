import React from "react";
import "./App.css";

import Search from "./components/Search/Search";
import { LocationParagraph } from "./components/Search/styled";

function App() {
  return (
    <div className="App">
      <LocationParagraph>
        Search weather by by a city or by clickoing on a nav icon
      </LocationParagraph>
      <Search />
    </div>
  );
}

export default App;
