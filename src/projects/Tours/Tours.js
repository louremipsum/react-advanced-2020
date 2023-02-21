import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import TourCard from "./TourCard";
import "./styles.css";

function Tours() {
  const url = "https://course-api.com/react-tours-project";
  const [Tour, setTour] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((resp) => {
        setTour(resp);
        setData(resp);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main">
      {isLoading && <Loading />}
      {!isLoading && <h1>Tours</h1>}
      {Tour.map((item) => {
        return <TourCard {...{ ...item, Tour, setTour }} key={item.id} />;
      })}
      {!Tour.length && !isLoading && (
        <>
          <h2>No Tours Left</h2>
          <button className="btn" onClick={() => setTour(data)}>
            Refresh
          </button>
        </>
      )}
    </div>
  );
}

export default Tours;
