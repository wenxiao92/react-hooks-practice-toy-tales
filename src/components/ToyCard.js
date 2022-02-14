import React from "react";

function ToyCard({toys, onDeleteToy}) {
  const {id, name, image, likes} = toys;

  function handleDelete(){

    //console.log(id, name, image, likes)
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((toy) => onDeleteToy(toy))
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
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
