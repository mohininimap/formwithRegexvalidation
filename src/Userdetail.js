import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import Displayuserdata from "./Displayuserdata";
const Userdetail = () => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const nameRegex = /^[A-Za-z]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  let yellow = "#ffc800";
  const [bgColor, setBgColor] = useState(yellow);
  const [emailError, setEmailError] = useState(false);
  let [firstNameError, setFirstnameError] = useState(false);
  let [lastNameError, setLastnameError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    age: "",
    marritalstatus: "",
    agree: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let purple = "#800080";
    setBgColor(purple);
    console.log("data --" + JSON.stringify(state));
    alert("data submitted successfully")
    setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      age: "",
      marritalstatus: "",
      agree: false,
    });
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      let email = e.target.value;
      if (!email.match(emailRegex)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
    if (e.target.name === "firstName") {
      let firstName = e.target.value;

      if (!firstName.match(nameRegex)) {
        setFirstnameError(true);
      } else {
        setFirstnameError(false);
      }
    }

    if (e.target.name === "lastName") {
      let lastName = e.target.value;

      if (!lastName.match(nameRegex)) {
        setLastnameError(true);
      } else {
        setLastnameError(false);
      }
    }

    if (e.target.name === "password") {
      let password = e.target.value;

      if (!password.match(passwordRegex)) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    }

    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
    //   console.log("datahandlechange --"+JSON.stringify(state))
  };
  return (
    <>
    <h3>User Detail Form</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          placeholder="Enter first name"
          onChange={handleChange}
        />
        {firstNameError ? <span>Invalid First Name</span> : ""}

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter lastName"
          value={state.lastName}
          name="lastName"
          onChange={handleChange}
        />
        {lastNameError ? <span>Invalid Last Name</span> : ""}

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Email"
          value={state.email}
          name="email"
          onChange={handleChange}
        />
        {emailError ? <span>Invalid Email</span> : ""}
        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={state.password}
          name="password"
          onChange={handleChange}
        />
        {passwordError ? <span>Invalid Password</span> : ""}

        <br />
        <br />

        <textarea
          name="address"
          value={state.address}
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <br />
        <br />

        <label htmlFor="">Age</label>
        <select name="age" onChange={handleChange} value={state.age}>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
        </select>
        <br />
        <br />

        <div>
          <span>Marrital Status</span>
          <span> - </span>
          <label>
            Unmarried
            <input
              type="radio"
              name="marritalstatus"
              value="unmarried"
              checked={state.marritalstatus === "unmarried"}
              onChange={handleChange}
            />
          </label>
          <label>
            Married
            <input
              type="radio"
              name="marritalstatus"
              value="married"
              checked={state.marritalstatus === "married"}
              onChange={handleChange}
            />
          </label>
        </div>
        <br />
        <br />

        <label>
          Agree
          <input
            type="checkbox"
            name="agree"
            checked={state.agree}
            onChange={handleChange}
          />
        </label>

        {emailError || firstNameError || lastNameError || passwordError ? (
          <button disabled style={{ backgroundColor: bgColor }} type="submit">
            Submit
          </button>
        ) : (
          <button style={{ backgroundColor: bgColor }} type="submit">
            Submit
          </button>
        )}
      </form>

      <Displayuserdata data={state} />
    </>
  );
};

export default Userdetail;
