import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((r) => r.json())
    .then((data) => setToys(data))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //change state as form's button is clicked
  function handleAddToy(newToy){
    setToys([...toys, newToy])
  }

  function refilterDeleted(toyToDelete){
    //do not use the {} brackets in the arrow function within filter method
    //notice the inequality sign to filter out the id
    const updatedToy = toys.filter((eachToy) => eachToy.id !== toyToDelete.id)
    //console.log(updatedToy)
    setToys(updatedToy)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toys} onDeleteToy={refilterDeleted}/>
    </>
  );
}

export default App;
