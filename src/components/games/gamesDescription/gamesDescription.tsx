import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSkeleton from "../../cards/loadingSkeleton";
import CardIcons from "../../cards/crads Icons/cardIcons";
import "./games.css";
import GameDescriptionCardTwo from "../CradTwo/gameDescriptionCradTwo";

interface Platforms {
  id: string; // Ensure this matches with CardIcons
  name: string;
  slug: string;
}

interface GameDetail {
  id: string;
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

  useEffect(() => {
    const fetchGameDetail = async () => {
      if (!id) {
        setError("Game ID is missing.");
        setLoading(false);
        return;
      }

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

  return (
    <>
      <div
        className="games d-flex"
        style={{
          backgroundImage: `url(${gameDetail.background_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="overlay">
          <h1 className="display-1 fw-bold text-white">{gameDetail.name}</h1>
          <h6>{stripHtmlTags(gameDetail.description)}</h6>
          <CardIcons
            platform={gameDetail.parent_platforms.map((p) => p.platform)}
          />
        </div>
      </div>
      {id && <GameDescriptionCardTwo gameId={parseInt(id)} />}{" "}
      {/* Convert id to number */}
      <div className="card pd-3">
        <h1>
          testing mode checking the previos version
        </h1>
        {/* <d-flex> className="justify-content-justify">
          <h2></h2>
        </d-flex> */}
      </div>
    </>
  );
};

export default GameDetail;
