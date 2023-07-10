/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./UserCard.module.css";

const UserCard = ({ fname, email, image }) => {
  return (
    <div className={styles.userCardContainer}>
      <h2>{fname}</h2>
      <p>{email}</p>
      <div>
        <img src={image} alt="img-here" width="200" height="200" />
      </div>
    </div>
  );
};

export default UserCard;
