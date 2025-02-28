import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gamesApi from "../navbar/services/gamesApi";
import CardIcons from "./crads Icons/cardIcons"; // Typo in import path
import "./cards.css";
import Badges from "./badges";
import LoadingSkeleton from "./loadingSkeleton";

export interface Platforms {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  tags: string[],
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

interface fetchGames {
  previous?: string;
  results: Game[];
}

const Cards = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await gamesApi.get<fetchGames>("/games");
        setGames(response.data.results);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching games:", err);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="card-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div className="col" key={index}>
              <LoadingSkeleton />
            </div>
          ))
        ) : games.length > 0 ? (
          games.map((game) => (
            <div className="col" key={game.id} onClick={() => handleCardClick(game.id)}>
              <div className="card">
                <img
                  src={game.background_image}
                  className="card-img-top"
                  alt={game.name}
                />
                <div className="card-body">
                  <h5 className="card-title text-danger text-uppercase fw-bold">
                    {game.name}
                  </h5>
                </div>
                <div className="d-flex justify-content-between m-3">
                  <div className="text-white">
                    <CardIcons
                      platform={game.parent_platforms.map((p) => p.platform)}
                    />
                  </div>
                  <div>
                    <Badges score={game.metacritic} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <p>No games found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
