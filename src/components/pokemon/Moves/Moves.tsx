import React from "react";
import capitalFirstLetter from "../../../js/capitalFirstLetter";
import { Pokemon } from "../../../types";

interface Props {
  pokemonObj: Pokemon;
}

const Moves: React.FunctionComponent<Props> = ({ pokemonObj }) => {
  const moves = pokemonObj.moves.slice(0, 2).map((i) => {
    const elem: string = capitalFirstLetter(i.move.name);
    return (
      <p key={i.move.name} className="move">
        {elem}
      </p>
    );
  });

  return (
    <div className="movesContainer">
      <h2>Moves</h2>
      {moves}
    </div>
  );
};

export default Moves;
