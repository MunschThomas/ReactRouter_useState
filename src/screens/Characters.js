import { useState, useEffect } from "react";
import axios from "axios";
// import "./Contact.css"

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    console.log("poulet 02:");
    // fetch("http://hp-api.herokuapp.com/api/characters")
    // 	.then((res) => res.json())
    // 	.then((res) => console.log(res))
    axios
      .get("http://hp-api.herokuapp.com/api/characters")
      .then((res) => console.log(res.data) || setCharacters(res.data));
  }, []);
  return (
    <div className="contact__container">
      {console.log("poulet 01:")}poulet character
      {characters.map(
        (character) =>
          console.log(character.image) || (
            <div>
              <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Characters;
