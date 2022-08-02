import axios from "axios";
import { useState, useEffect } from "react";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("characters:", characters);
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://rickandmortyapi.com/api/character");
    setCharacters(data);
  };
  
  return (
    <div className="characters-list">
      {characters.map((character) => (
        <div key={character.id}>
          <p>{character.info}</p>
        </div>
      ))}
    </div>
  );
}
