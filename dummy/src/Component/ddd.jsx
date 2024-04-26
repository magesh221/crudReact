import { useState , useEffect } from "react";


function MyComponent() {
    const [successMessage, setSuccessMessage] = useState(null);
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.example.com/data');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          // Process the data here if needed
          setSuccessMessage('Data fetched successfully!');
        } catch (error) {
          console.error('Error fetching data:', error.message);
          setSuccessMessage(null); // Clear success message if an error occurs
        }
      };
      fetchData();
    }, []);
    return (
  <div>
        {successMessage && <p>{successMessage}</p>}
  </div>
    );
  }
   
  export default MyComponent;