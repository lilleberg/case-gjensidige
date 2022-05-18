import React from "react";

interface Props {
  imgSrc: string;
  altText: string;
}

const Image: React.FunctionComponent<Props> = ({ imgSrc, altText }) => {
  return (
    <div className="imageContainer">
      <img src={imgSrc} alt={`${altText} illustration`} />
    </div>
  );
};

export default Image;
