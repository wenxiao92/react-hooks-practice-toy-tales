import React from "react";

function ToyCard({toys, onDeleteToy, onUpdateToy}) {
  const {id, name, image, likes} = toys;

  function handleDelete(){

    //console.log(id, name, image, likes)
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      //nothing actually returned, just passing the toy but in the app component we will use the id
      onDeleteToy(toys)
    })
  }

  function updateLikes(){
  fetch(`http://localhost:3001/toys/${id}`, {
    method:"PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"likes": toys.likes + 1}),
  })
  .then((r) => r.json())
  .then(onUpdateToy)
  //actual (current) object is returned with updated Likes. Use prop without argument. The App component will know which toy to re-render the likes
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={updateLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
