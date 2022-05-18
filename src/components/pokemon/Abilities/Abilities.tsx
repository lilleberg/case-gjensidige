import React from "react";
import capitalFirstLetter from "../../../js/capitalFirstLetter";
import { Pokemon } from "../../../types";

interface Props {
  pokemonObj: Pokemon;
}

const Abilities: React.FunctionComponent<Props> = ({ pokemonObj }) => {
  const ability = pokemonObj.abilities.map((i) => {
    const elem: string = capitalFirstLetter(i.ability.name);
    return <p key={i.slot}>{elem}</p>;
  });
  return (
    <div className="abilitiesContainer">
      <h2>Abilities</h2>
      {ability}
    </div>
  );
};

export default Abilities;
