import React, { useEffect, useState } from "react";
import gamesApi from "../navbar/services/gamesApi";
import CardIcons from "./crads Icons/cardIcons";
import "./cards.css";

export interface Platforms{
  id: string,
  name: string,
  slug: string
}


interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platforms}[]
}

interface fetchGames {
  previous?: string;
  results: Game[];
}

const Cards = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await gamesApi.get<fetchGames>("/games");
        setGames(response.data.results);
      } catch (err) {
        console.error("Error fetching games:", err);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="card-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {games.length > 0 ? (
          games.map((game) => (
            <div className="col" key={game.id}>
              <div className="card">
                <img
                  src={game.background_image}
                  className="card-img-top"
                  alt={game.name}
                />
                <div className="card-body">
                  <h5 className="card-title text-danger text-uppercase fw-bold">{game.name}</h5>
                </div>
                <div className="text-white"> 
                  <CardIcons platform={game.parent_platforms.map(p => p.platform)}></CardIcons>                   
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <p></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
