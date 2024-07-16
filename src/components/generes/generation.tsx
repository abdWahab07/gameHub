import { useState, useEffect } from "react";
import LoadingSkeleton from "../cards/loadingSkeleton";
import ApiServices from "./services/apiServices";
import "./generation.css"

export interface Genre {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}

const GenreList = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch(
                    `https://api.rawg.io/api/genres?key=f5280fc71d0a444791a6834ce2f76a24`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setGenres(data.results);
            } catch (error) {
                console.error("Error fetching genres:", error);
                setError("Failed to fetch genres.");
            } finally {
                setTimeout(() => setLoading(false), 2000);
            }
        };

        fetchGenres();
    }, []);

    if (loading) {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div className="col" key={index}>
                        <LoadingSkeleton />
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="gen p-3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {genres.map((gen) => (
                    <div className="col" key={gen.id}>
                        <div className="card">
                            <img
                                src={gen.image_background}
                                className="card-img-top"
                                alt={gen.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-danger fw-bold">{gen.name}</h5>
                                <p className="card-text text-white">
                                    <ApiServices id={gen.id} />
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreList;
