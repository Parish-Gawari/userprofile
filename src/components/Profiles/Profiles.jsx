/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import styles from "./Profiles.module.css";
const Profiles = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((value) => {
        console.log(value.data);
        setUsers(value.data);
      });
  }, []);

  const userCards = users.map((user, index) => {
    return (
      <UserCard
        key={index}
        fname={user.first_name}
        email={user.email}
        image={user.avatar}
      />
    );
  });
  return <div className={styles.profilesContainer}>{userCards}</div>;
};

export default Profiles;
