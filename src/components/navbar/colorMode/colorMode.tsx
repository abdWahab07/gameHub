import React, { useState } from "react";

const ColorMode = () => {
  const [colorMode, setColorMode] = useState(true);
  const toggleEffect = () => {
    setColorMode(!colorMode);
  };

  return (
    <div className="text-center">
      {colorMode === true ? (
        <button type="button" className="btn btn-dark" onClick={toggleEffect}>
          Light
        </button>
      ) : (
        <button type="button" className="btn btn-light" onClick={toggleEffect}>
          Dark
        </button>
      )}
    </div>
  );
};

export default ColorMode;
