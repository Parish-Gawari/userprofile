/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
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

  const [fnameMsg, setFnameMsg] = useState("");
  const [lnameMsg, setLnameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [mobileMsg, setMobileMsg] = useState("");

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

  const showfnameMsg = (msg) => {
    setFnameMsg(msg);
    setTimeout(() => {
      setFnameMsg("");
    }, 5000);
  };
  const showlnameMsg = (msg) => {
    setLnameMsg(msg);
    setTimeout(() => {
      setLnameMsg("");
    }, 5000);
  };
  const showEmailMsg = (msg) => {
    setEmailMsg(msg);
    setTimeout(() => {
      setEmailMsg("");
    }, 5000);
  };
  const showMobileMsg = (msg) => {
    setMobileMsg(msg);
    setTimeout(() => {
      setMobileMsg("");
    }, 5000);
  };

  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const isFormValid = () => {
    const reExEmail = /^\S+@\S+\.\S+$/;
    const reExName = /^[A-Za-z]+$/;

    const validations = [
      {
        isValid: !fname,
        errorMsg: "Please enter first name.",
        inputref: fnameRef,
        id: "fname",
      },
      {
        isValid: fname.length < 3,
        errorMsg: "Please enter first name at least 3 characters in it.",
        inputref: fnameRef,
        id: "fname",
      },
      {
        isValid: !reExName.test(fname),
        errorMsg: "Please enter a valid first name.",
        inputref: fnameRef,
        id: "fname",
      },
      {
        isValid: !lname,
        errorMsg: "Please enter last name.",
        inputref: lnameRef,
        id: "lname",
      },
      {
        isValid: lname.length < 3,
        errorMsg: "Please enter last name at least 3 characters in it.",
        inputref: lnameRef,
        id: "lname",
      },
      {
        isValid: !reExName.test(lname),
        errorMsg: "Please enter a valid last name.",
        inputref: lnameRef,
        id: "lname",
      },
      {
        isValid: !email,
        errorMsg: "Please enter email id.",
        inputref: emailRef,
        id: "email",
      },
      {
        isValid: !reExEmail.test(email),
        errorMsg: "Please enter a valid email id.",
        inputref: emailRef,
        id: "email",
      },
      {
        isValid: !mobile,
        errorMsg: "Please enter mobile number.",
        inputref: mobileRef,
        id: "mobile",
      },
      {
        isValid: mobile.length !== 10,
        errorMsg: "Please enter a 10 digit mobile number",
        inputref: mobileRef,
        id: "mobile",
      },
    ];

    for (const validation of validations) {
      // if (validation.isValid) {
      //   showErrorMsg(validation.errorMsg);
      //   validation.inputref.current.focus();
      //   return false;
      // }
      if (validation.isValid && validation.id === "fname") {
        showfnameMsg(validation.errorMsg);
        validation.inputref.current.focus();
        return false;
      }
      if (validation.isValid && validation.id === "lname") {
        showlnameMsg(validation.errorMsg);
        validation.inputref.current.focus();
        return false;
      }
      if (validation.isValid && validation.id === "email") {
        showEmailMsg(validation.errorMsg);
        validation.inputref.current.focus();
        return false;
      }
      if (validation.isValid && validation.id === "mobile") {
        showMobileMsg(validation.errorMsg);
        validation.inputref.current.focus();
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
            ref={fnameRef}
            onChange={onFnameChangeHandler}
          />
        </div>
        <p style={{ color: "red" }}>{fnameMsg}</p>
        <div className={styles.field}>
          <label htmlFor="lname">Last Name</label>
          <input
            ref={lnameRef}
            value={lname}
            className={styles.inputField}
            type="text"
            id="lname"
            onChange={onLnameChangeHandler}
          />
        </div>
        <p style={{ color: "red" }}>{lnameMsg}</p>
        <div className={styles.field}>
          <label htmlFor="email">Email Id</label>
          <input
            ref={emailRef}
            value={email}
            className={styles.inputField}
            type="email"
            id="email"
            onChange={onEmailChangeHandler}
          />
        </div>
        <p style={{ color: "red" }}>{emailMsg}</p>
        <div className={styles.field}>
          <label htmlFor="mobile">Mobile No.</label>
          <input
            ref={mobileRef}
            value={mobile}
            className={styles.inputField}
            type="number"
            id="mobile"
            onChange={onMobileChangeHandler}
          />
        </div>
        <p style={{ color: "red" }}>{mobileMsg}</p>
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
