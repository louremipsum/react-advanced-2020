import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Github Users</h2>
      <ol className="users">
        {users.map((item) => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <li key={id}>
              <img src={avatar_url} alt={`${login}'s pfp`} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default UseEffectFetchData;
