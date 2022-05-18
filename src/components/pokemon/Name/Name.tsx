import React from "react";
import capitalFirstLetter from "../../../js/capitalFirstLetter";

interface Props {
  pokemonName: string;
}

const Name: React.FunctionComponent<Props> = ({ pokemonName }) => {
  const name: string = capitalFirstLetter(pokemonName);
  return <h1 className="pokemonName">{name}</h1>;
};

export default Name;
