/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./UserCard.module.css";
import { PropTypes } from "prop-types";

const UserCard = ({ fname, email, image, userIndex, deleteUserHandler }) => {
  return (
    <div className={styles.userCardContainer}>
      <h2>{fname}</h2>
      <p>{email}</p>
      <div>
        <img src={image} alt="img-here" width="200" height="200" />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => deleteUserHandler(userIndex)}>Delete</button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  fname: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  userIndex: PropTypes.number.isRequired,
  deleteUserHandler: PropTypes.func.isRequired,
};

export default UserCard;
