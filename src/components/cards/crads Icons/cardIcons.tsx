import React from "react";
import { Platforms } from "../cards"; // Adjust the import as necessary


interface Props {
  platform: Platforms[];
}


const CardIcons = ({ platform }: Props) => {
  const icons: { [key: string]: string } = {
    pc: "fas fa-desktop",
    windows: "fab fa-windows",
    android: "fab fa-android",
    ios: "fab fa-apple",
    xbox: "fab fa-xbox",
    minecraft: "fab fa-minecraft",
    linux: "fab fa-linux",
    web: "fas fa-globe",
    nintendo: "fab fa-nintendo-switch",
    playstation: "fab fa-playstation",
  };

  return (
    <div>
      {platform.map((p: Platforms) => (
        <i key={p.slug} className={icons[p.slug]} style={{ fontSize: '15px', margin: '10px'}}></i>
      ))}

    </div>
  );
};

export default CardIcons;
