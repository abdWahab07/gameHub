import React, { useEffect, useState } from 'react';
import LoadingSkeleton from '../../cards/loadingSkeleton';
import "./gameDescriptionCradTwo.css";

interface Achievement {
    id: number;
    name: string;
    description: string;
    image: string;
    percent: string;
}

interface GameCard {
    id: number;
    name: string;
    background_image: string;
}

interface GameDescriptionCardTwoProps {
    gameId: number; // Expecting gameId to be a number
}

const GameDescriptionCardTwo: React.FC<GameDescriptionCardTwoProps> = ({ gameId }) => {
    const [gameCard, setGameCard] = useState<GameCard | null>(null);
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGameCard = async () => {
            if (!gameId) return; // Handle the case if gameId is undefined

            try {
                const response = await fetch(
                    `https://api.rawg.io/api/games/${gameId}/achievements?key=f5280fc71d0a444791a6834ce2f76a24`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                
                // Assuming the game card data comes from a different endpoint or is included in the achievements response
                // Here, I assume you might also want the game details; adjust as necessary
                setGameCard({
                    id: data.id,
                    name: data.name,
                    background_image: data.background_image,
                });

                // Set achievements from the fetched data
                setAchievements(data.achievements || []);
            } catch (error) {
                console.error("Error fetching game details:", error);
                setError("Failed to fetch game details.");
            } finally {
                setLoading(false);
            }
        };

        fetchGameCard();
    }, [gameId]);

    if (loading) {
        return <LoadingSkeleton />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!gameCard) {
        return <div>Error: Game details not available.</div>;
    }

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={gameCard.background_image} className="img-fluid rounded-start" alt={gameCard.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-white">{gameCard.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Achievements:</h6>
                        <ul>
                            {achievements.map((achievement) => (
                                <li key={achievement.id}>
                                    <strong>{achievement.name}</strong>: {achievement.description} (Unlocked: {achievement.percent}%)
                                    {achievement.image && <img src={achievement.image} alt={achievement.name} className="achievement-image" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDescriptionCardTwo;
