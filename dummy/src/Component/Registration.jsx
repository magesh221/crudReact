// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export function Registration() {
//   const [value, setValue] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post('http://localhost:8080/user/reader');
//         const userData = response.data; // ensure you access the actual data
//         console.log('userData: ', userData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // call the function to fetch data when the component mounts
//   }, []); // dependency array ensures useEffect runs only on component mount

//   const handleChange = (e) => {
//     setValue(e.target.value); // update state with the input's value
//   };

//   const handleClick = () => {
//     setData((prev) => [...prev, value]); // add the current value to the data array
//     console.log(data); // log the updated data state
//   };

//   return (
//     <div>
//                   <label>Name : </label>
//       <input
//         value={value}
//         type="Name"
//         onChange={handleChange} // handle input change
//       />
//    <br />
//       <label>email : </label>
//       <input
//         value={value}
//         type="email"
//         onChange={handleChange} // handle input change
//       />
//       <br />
//             <label>Password : </label>
//       <input
//         value={value}
//         type="password"
//         onChange={handleChange} // handle input change
//       />
//       <br />
//             <label>Phone : </label>
//       <input
//         value={value}
//         type="Number"
//         onChange={handleChange} // handle input change
//       />
//       <br />

//       <button onClick={handleClick}>Add</button> {/* handle button click */}
//     </div>
//   );
// }


















import axios from 'axios';
import React, { useState } from 'react';

export function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    try {
      const response = await axios.post('http://localhost:8080/user/register', {
        name,
        email,
        password,
        phone
      });
      console.log('Response:', response.data);
      // Optionally, you can reset the form fields after successful submission
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <br />
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
