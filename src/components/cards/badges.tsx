import React from "react";

export interface Props {
  score: number;
}

const Badges = ({ score }: Props) => {
  const color =
    score > 75 ? "green" : score > 65 ? "yellow" : score > 50 ? "red" : "grey";

  return (
    <div>
      <h6>
        <span style={{ background:color }} className="badge text-white">
          {score}
        </span>
      </h6>
    </div>
  );
};

export default Badges;
