import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, onDeleteToy, onUpdateToy}) {

  const displayToys = toyData.map((eachToy) => (
    <ToyCard
      key={eachToy.id}
      toys={eachToy}
      onDeleteToy={onDeleteToy}
      onUpdateToy={onUpdateToy}
    />
  ))


  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
