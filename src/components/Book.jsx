import React from "react";
import "./style.css";
const Book = ({ searchResults }) => {
  const defaultImage ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2FhkpoU8UOudx3wcmGfYQgFizL9AnAiZnw&usqp=CAU%27"
  return (
    <div>
      <div class="cardBody">
        {searchResults.map((item) => (
          <div class="card" key={item.id}>
            {item.volumeInfo.imageLinks &&
              item.volumeInfo.imageLinks.thumbnail && (
                <img
                  src={item.volumeInfo.imageLinks.thumbnail !== undefined ? item.volumeInfo.imageLinks.thumbnail:defaultImage}
                  alt={item.volumeInfo.title}
                />
              )}

            <div class="info">
              <h3>{item.volumeInfo.title}</h3>
              <p>{item.volumeInfo.authors}</p>
              <a
                href={item.volumeInfo.infoLink}
                target="_blank"
                rel="noreferrer"
              >
                <button>Buy</button>{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
