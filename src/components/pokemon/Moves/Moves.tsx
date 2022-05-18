import React from "react";
import capitalFirstLetter from "../../../js/capitalFirstLetter";
import { Pokemon } from "../../../types";

interface Props {
  pokemonObj: Pokemon;
}

const Moves: React.FunctionComponent<Props> = ({ pokemonObj }) => {
  let moves = pokemonObj.moves.slice(0, 2).map((i) => {
    let moveName: string = capitalFirstLetter(i.move.name);
    return (
      <div key={i.move.name} className="move">
        <h3>{moveName}</h3>
      </div>
    );
  });

  return (
    <div className="movesContainer">
      <h2>Moves:</h2>
      {moves}
    </div>
  );
};

export default Moves;
