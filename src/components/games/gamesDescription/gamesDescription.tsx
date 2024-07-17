import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSkeleton from "../../cards/loadingSkeleton";
import CardIcons from "../../cards/crads Icons/cardIcons"; // Typo in import path
import "./games.css";
import { Game } from "../../cards/cards"; // Typo in import path

interface Platforms {
  id: string;
  name: string;
  slug: string;
}

interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  rating_top: number;
  released: string;
  playtime: number;
  description: string;
  parent_platforms: { platform: Platforms }[];
}

const stripHtmlTags = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [gameDetail, setGameDetail] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchGameDetail = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=f5280fc71d0a444791a6834ce2f76a24`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: GameDetail = await response.json();
        setGameDetail(data);
      } catch (error) {
        console.error("Error fetching game detail:", error);
        setError("Failed to fetch game details.");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetail();
  }, [id]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!gameDetail) {
    return <div>Error: Game details not available.</div>;
  }

  const shortDescription = stripHtmlTags(gameDetail.description).substring(0, 400) + '...';

  return (
    <div
      className="games d-flex"
      style={{
        backgroundImage: `url(${gameDetail.background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '100vh'
      }}
    >
      <div className="overlay">
        <div className="hstack gap-3 text-center align-items-center">
          <div className="p-2">
            <h5>
              <span className="badge text-bg-secondary">
                {new Date(gameDetail.released).toLocaleDateString()}
              </span>
            </h5>
          </div>
          <div className="p-2">
            <p className="text-white text-uppercase fw-bold mt-2">
              Average playtime: {gameDetail.playtime} hours
            </p>
          </div>
          <div className="p-2">
            <CardIcons
              platform={gameDetail.parent_platforms.map((p) => p.platform)}
            />
          </div>
        </div>

        <h1 className="display-1 fw-bold text-white">{gameDetail.name}</h1>
        <h6>
          <span className="badge text-bg-success">
            TOP RANKING: {gameDetail.rating_top}
          </span>
        </h6>
        <h3 className="fw-bold">About</h3>
        <h6 className="text-white fw-bold">
          {isExpanded ? stripHtmlTags(gameDetail.description) : shortDescription}
        </h6>
        <button 
          className="btn btn-light mt-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>

      </div>
    </div>
  );
};

export default GameDetail;
