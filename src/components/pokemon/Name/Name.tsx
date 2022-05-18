import React from "react";

interface Props {
  pokemonName: string;
}

const Name: React.FunctionComponent<Props> = ({ pokemonName }) => {
  return <h1 className="pokemonName">{pokemonName}</h1>;
};

export default Name;
