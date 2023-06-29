import React from "react";
import Book from "./Book";
import "./style.css";
import MyImage from "./log.png";
import { useState } from "react";

const Explorer = () => {
  const [index, setIndex] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    if (index === "") return;
    e.preventDefault();
    const url = `https://www.googleapis.com/books/v1/volumes?q=${index}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.items))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="explorer">
        <img className="log" src={MyImage} alt="" />
        <div className="explorerInput">
          <form onSubmit={handleChange}>
            <input
              type="text"
              onChange={(e) => setIndex(e.target.value)}
              placeholder="search books"
            />
            <button type="submit">search</button>
          </form>
        </div>
        <div className="line"></div>
      </div>
      <div className="bookExplorer">
        <Book searchResults={searchResults} />
      </div>
    </div>
  );
};

export default Explorer;
