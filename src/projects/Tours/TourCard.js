import React from "react";

function TourCard(item) {
  const { id, name, info, image, price, setTour, Tour } = item;
  const handleClick = () => {
    setTour(Tour.filter((item) => item.id !== id));
  };

  return (
    <article className="card" key={id}>
      <img src={image} alt={`${name}'s Tour`} className="imgCard" />
      <div className="head">
        <p className="name">{name}</p>
        <p className="price">₹{price}</p>
      </div>
      <p className="info">{info}</p>
      <button type="button" className="ni" onClick={handleClick}>
        Not Interested
      </button>
    </article>
  );
}

export default TourCard;
