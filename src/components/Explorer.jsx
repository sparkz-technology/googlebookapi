import React from "react";
import Book from "./Book";
import "./style.css";
import MyImage from "./log.png";
import { useState } from "react";
const Explorer = () => {
  const [index, setIndex] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${index}`;
    fetch(url)
      .then((respance) => respance.json())
      .then((data) => setSearchResults(data.items))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div class="explorer">
        <img class="log" src={MyImage} alt="" />
        <div class="explorerInput">
           <p> </p>
          <input type="text" onChange={(e) => setIndex(e.target.value)} placeholder="search books"></input>
          <button type="submit" onClick={handleChange}>
            search
          </button>
        </div>
        <div class="line"> </div>
      </div>
      <div class="bookExplorer">
        <Book searchResults={searchResults} />
      </div>
    </div>
  );
};
export default Explorer;
