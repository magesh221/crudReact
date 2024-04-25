import React, { useEffect, useState } from "react";
import axios from "axios";

export function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/reader");

        const userData = response.data.msg;
        console.log("userData: ", userData);
        setData(userData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("data:", data);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>User Information</h2>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>
              Two-Factor Auth Status: {item.tfastatus ? "Enabled" : "Disabled"}
            </p>
            <p>
              PDF Link: 
              <a href={ item.url} target="_blank" rel="noopener noreferrer">
                ...View...
              </a>
            </p>
            <p>Created At: {new Date(item.createdAt).toLocaleString()}</p>
          </div>
        );
      })}

    </div>
  );
}
