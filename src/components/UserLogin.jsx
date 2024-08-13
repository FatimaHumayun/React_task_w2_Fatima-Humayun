import { useRef, useState } from "react";
import { loginURL } from "../util";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function UserLogin() {
  const userName = useRef();
  const userPassword = useRef();
  const [error, setError] = useState("");
  //   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //Handle Form Submission here
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userNameValue = userName.current.value;
    const userPasswordValue = userPassword.current.value;

    //Validate the user
    //check username first
    if (!userNameValue) {
      setError("Must Enter a valid username!");
      return;
    }
    if (userPasswordValue === "") {
      setError("Invalid Password! Try Again...");
      return;
    }
    try {
      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: userNameValue,
          password: userPasswordValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = res.data;
      localStorage.setItem("auth_token", token);
      navigate("/listings");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <h1>Star Wars Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            ref={userName}
            placeholder="Enter your username"
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            ref={userPassword}
            placeholder="Enter your password"
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
