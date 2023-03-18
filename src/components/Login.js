import React, { useState } from "react";

function Login() {
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("I submit");
    console.log(formDetails.username);
    console.log(formDetails.password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." onChange={handleChange} value={formDetails.username} />
      <input type="password" name="password" placeholder="Enter password..." onChange={handleChange} value={formDetails.password} />
      <button>Login</button>
    </form>
  );
}

export default Login;
