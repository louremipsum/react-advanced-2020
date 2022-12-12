import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFristName] = useState("");
  const [Email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && Email) {
      console.log("submit the form");
      const newValue = {
        id: new Date().getTime().toString(),
        firstName,
        Email,
      };
      setPeople((people) => {
        return [...people, newValue];
      });
      setFristName("");
      setEmail("");
    } else {
      console.log("empty value");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFristName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add person</button>
        </form>
        {people.map((item) => {
          const { id, firstName, Email } = item;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{Email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
