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

  function refilterLikes(toyToUpdate){
  fetch('http://localhost:3001/toys')
  .then((r) => r.json())
  .then((data) => setToys(data))

  //   console.log(toyToUpdate)
  //   //maps through each toy and looks up the id. If matches, then return the toy's object and push into an array
  //   //Eventually, map will come across the toy you updated and return that toy's data and then update
  //   //the state with the new array. Alternatively, we can refetch the whole JSON data and set state
  //   const updatedToys = toys.map((toy) =>
  //   toy.id === toyToUpdate.id ? toyToUpdate : toy
  // );
  // console.log(updatedToys)
  // setToys(updatedToys);

  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toys} onDeleteToy={refilterDeleted} onUpdateToy={refilterLikes}/>
    </>
  );
}

export default App;
