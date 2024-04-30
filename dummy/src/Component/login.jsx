import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./css/register.css";
import url from "./RouteUrl";

export function Login() {
  const [value, setValue] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue((prev)=> ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url.login, value);
      if (response.data.status === true) {
        setMessage(response.data.msg);
        localStorage.setItem('token', response.data.token);
        navigate("/reader");
      } else {
        window.alert("Login error: " + response.data.msg);
      }
    } catch (error) {
      window.alert("Login error: " + error.response.data.msg);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      
    
    }, 5000); // Clear message after 5 seconds
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="registration-container">
      <div className="registration-form">
        <div style={{ marginBottom: 20 }}>
          <h2>Login</h2>
        </div>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={value.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={value.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}
