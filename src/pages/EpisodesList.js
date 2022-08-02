import axios from "axios";
import { useState, useEffect } from "react";

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("episodes:", episodes);
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
    setEpisodes(data);
  };
  
  return (
    <div className="episodes-list">
      {episodes.map((episode) => (
        <div key={episode.results.id}>
          <p>{episode.results.name}</p>
          <p>{episode.results.air_date}</p>
          <p>{episode.results.episode}</p>
          <p>{episode.results.characters}</p>
        </div>
      ))}
    </div>
  );
}
