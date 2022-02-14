import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, onDeleteToy}) {

  const displayToys = toyData.map((eachToy) => (
    <ToyCard
      key={eachToy.id}
      toys={eachToy}
      onDeleteToy={onDeleteToy}
    />
  ))


  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
