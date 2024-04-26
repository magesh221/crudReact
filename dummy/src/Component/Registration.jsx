import React, { useState } from "react";
import axios from "axios";
import { useNavigate , Link} from "react-router-dom"; // Correct import for navigation
import "./register.css";

export function Registration() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        value
      );
      if (response.data.message){ 
        setMessage(response.data.message);
        console.log('response.data.message: ', response.data.message);
        navigate("/first");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("Registration error. Please try again."); // Display alert box for errors
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register</h2>
        {message && <div className="message">{message}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
        <span>
          Already have an account? <Link to="/first">Login</Link>
        </span>
      </div>
    </div>
  );
}



//-----------------------------------------------------------------------------------------------------











// import axios from "axios";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export function Registration() {
//   const [data, setData] = useState(null);
//   const [value, setValue] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//   });

//   const handleChange = (event) => {
//     setValue({ ...value, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/user/register",
//         value
//       );
//       const msg = response.data.message;
//       setData(msg);
//       console.log(data);
//     } catch (error) {
//       console.error("Error: ", error); // Error handling
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           name="name"
//           value={value.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={value.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={value.password}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           placeholder="Phone Number"
//           name="phone"
//           value={value.phone}
//           onChange={handleChange}
//         />

//         <button type="submit">Register</button>
//       </form>

//       <span>
//         Already have an account? <Link to="/first">signup</Link>
//       </span>
//     </div>
//   );
// }

//------------------------------------------------------------------------------------------------------

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom'
// export function Registration() {
//   const [value, setValue] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.post("http://localhost:8080/user/register");
//       try {
//         const userValue = response.data.msg;
//         console.log("userValue: ", userValue);
//       } catch (error) {
//         console.log("error: ", error);
//       }
//     };
//     fetchData();
//   }, []);
//   const data = {
//     name: value.name,
//     email: value.email,
//     password: value.password,
//     phone: value.phone,
//   };
//   console.log("data: ", data);

//   const handleChange = (event) => {
//     setValue({ ...value, [event.target.name]: event.target.value });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Username"
//         name="name"
//         onChange={(e) => handleChange(e)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         name="email"
//         onChange={(e) => handleChange(e)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         name="password"
//         onChange={(e) => handleChange(e)}
//       />
//       <input
//         type="number"
//         placeholder="Phone Number"
//         name="phone"
//         onChange={(e) => handleChange(e)}
//       />

// <button type="submit">Register</button>
// <span>Already have an account ? <Link to='/first'> Login </Link> </span>

//     </div>
//   );
// }

//-----------------------------------------------------------------------------------------------------------

// import axios from "axios";
// import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// export function Registration() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [response, setResponse] = useState("")

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "password":
//         setPassword(value);
//         break;
//       case "phone":
//         setPhone(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // prevent the default form submission behavior
//     try {
//       const response = await axios.post("http://localhost:8080/user/register", {
//         name,
//         email,
//         password,
//         phone,
//       });
//       console.log("Response:", response.data);
//       // Optionally, you can reset the form fields after successful submission
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhone("");
// //setResponse('Data signup successfully!');

//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//           required
//         />
//         <br />
//         <label>Phone:</label>
//         <input
//           type="tel"
//           name="phone"
//           value={phone}
//           onChange={handleChange}
//           required
//         />
//         <br />

//         <button type="submit">Register</button>

//       </form>
//     </div>
//   );
// }

// //---------------------------------------------------------------------------------------------------------------------
