import React from "react";
import { Pokemon } from "../types";
import Image from "./pokemon/Image/Image";
import Moves from "./pokemon/Moves/Moves";
import Name from "./pokemon/Name/Name";
import Stats from "./pokemon/Stats/Stats";

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    console.log(pokemon);

    return (
      <div className="infoContainer">
        <Name pokemonName={pokemon.name} />
        <div className="image-info">
          <Image
            imgSrc={pokemon.sprites.other.dream_world.front_default}
            altText={pokemon.name}
          />

          <Stats
            number={pokemon.id}
            height={pokemon.height}
            weight={pokemon.weight}
          />
        </div>
        <Moves pokemonObj={pokemon} />
      </div>
    );
  }
  return null;
};

export default InfoContainer;
