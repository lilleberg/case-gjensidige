import React from "react";

interface Props {
  number: number;
  height: number;
  weight: number;
}

const Stats: React.FunctionComponent<Props> = ({ number, height, weight }) => {
  return (
    <div className="statsContainer d-flex">
      <p>NO: {number}.</p>
      <p>HT: {height} dm.</p>
      <p>WT: {weight} hg.</p>
    </div>
  );
};

export default Stats;
