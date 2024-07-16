import React, { useEffect, useState } from "react";

interface ApiServicesProps {
    id: number;
}

const ApiServices: React.FC<ApiServicesProps> = ({ id }) => {
    const [description, setDescription] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await fetch(
                    `https://api.rawg.io/api/genres/${id}?key=f5280fc71d0a444791a6834ce2f76a24`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const cleanDescription = data.description.replace(/<[^>]+>/g, ''); // Remove HTML tags
                setDescription(cleanDescription);
            } catch (error) {
                console.error("Error fetching genre description:", error);
                setError("Failed to fetch description.");
            }
        };

        fetchDescription();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    const halfLength = Math.floor(description.length / 2);
    const halfDescription = description.slice(0, halfLength);

    return <div>{halfDescription}...</div>; // Append ellipsis for clarity
};

export default ApiServices;
