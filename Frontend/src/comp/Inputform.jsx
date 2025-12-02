import React from "react";
import axios from "axios";

export default function Inputform({ setIsOpen }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let endpoint = isRegistered ? "register" : "login";

    axios
      .post(`http://localhost:5000/${endpoint}`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setIsOpen();
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Invalid credentials");
      });
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            className="input"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            className="input"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
            placeholder="Enter your password"
          />
        </div>
        <br/>
         {error && <h6 className="error">{error}</h6>}

        <button type="submit">{isRegistered ? "SignUp" : "Login"}</button>
        <br />

       

        <p
          onClick={() => {
            setIsRegistered((prev) => !prev);
            setError("");
          }}
        >
          {isRegistered ? "Already have Account" : "Create new Account"}
        </p>
      </form>
    </>
  );
}
