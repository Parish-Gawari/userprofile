/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./UserForm.module.css";
import { addUser } from "../../service/getdata";
import Loader from "../Loader/Loader";
import { Button } from "react-bootstrap";

const UserForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const onFnameChangeHandler = (e) => setFname(e.target.value);
  const onLnameChangeHandler = (e) => setLname(e.target.value);
  const onEmailChangeHandler = (e) => setEmail(e.target.value);
  const onMobileChangeHandler = (e) => setMobile(e.target.value);

  const resetFields = () => {
    setEmail("");
    setFname("");
    setLname("");
    setMobile("");
    setIsLoader(false);
    setSuccessMsg("");
    setErrorMsg("");
  };

  const showSuccessMsg = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  const showErrorMsg = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  const isFormValid = () => {
    const reExEmail = /^\S+@\S+\.\S+$/;
    const reExName = /^[A-Za-z]+$/;

    const validations = [
      {
        isValid: !fname,
        errorMsg: "Please enter first name.",
      },
      {
        isValid: fname.length < 3,
        errorMsg: "Please enter first name at least 3 characters in it.",
      },
      {
        isValid: !reExName.test(fname),
        errorMsg: "Please enter a valid first name.",
      },
      {
        isValid: !lname,
        errorMsg: "Please enter last name.",
      },
      {
        isValid: lname.length < 3,
        errorMsg: "Please enter last name at least 3 characters in it.",
      },
      {
        isValid: !reExName.test(lname),
        errorMsg: "Please enter a valid last name.",
      },
      {
        isValid: !email,
        errorMsg: "Please enter email id.",
      },
      {
        isValid: !reExEmail.test(email),
        errorMsg: "Please enter a valid email id.",
      },
      {
        isValid: !mobile,
        errorMsg: "Please enter mobile number.",
      },
      {
        isValid: mobile.length !== 10,
        errorMsg: "Please enter a 10 digit mobile number",
      },
    ];

    for (const validation of validations) {
      if (validation.isValid) {
        showErrorMsg(validation.errorMsg);
        return false;
      }
    }
    return true;
  };

  const createUserHandler = () => {
    if (!isFormValid()) {
      return;
    }
    const user = {
      fname,
      lname,
      email,
      mobile,
    };
    setIsLoader(true);
    addUser(user)
      .then((data) => {
        if (data.id) {
          resetFields();
          showSuccessMsg(`User has been created successfully ${data.id}`);
        }
      })
      .catch(() => {
        setIsLoader(false);
        showErrorMsg("Something went wrong,please try again later!!!");
      });
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.field}>
          <label htmlFor="fname">First Name</label>
          <input
            value={fname}
            className={styles.inputField}
            type="text"
            id="fname"
            onChange={onFnameChangeHandler}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lname">Last Name</label>
          <input
            value={lname}
            className={styles.inputField}
            type="text"
            id="lname"
            onChange={onLnameChangeHandler}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email Id</label>
          <input
            value={email}
            className={styles.inputField}
            type="email"
            id="email"
            onChange={onEmailChangeHandler}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="mobile">Mobile No.</label>
          <input
            value={mobile}
            className={styles.inputField}
            type="number"
            id="mobile"
            onChange={onMobileChangeHandler}
          />
        </div>
        <div className={styles.field}>
          <Button
            onClick={createUserHandler}
            variant="primary"
            disabled={isLoader}
          >
            Create User
          </Button>
          <Button
            style={{ marginLeft: "4px" }}
            onClick={resetFields}
            variant="info"
          >
            Reset From
          </Button>
        </div>
        {isLoader && <Loader />}
        <p className={styles.successText}>{successMsg}</p>
        <p className={styles.errorText}>{errorMsg}</p>
      </div>
    </>
  );
};

export default UserForm;
