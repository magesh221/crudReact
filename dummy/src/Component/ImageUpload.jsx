import React, { useState } from 'react';
import axios from 'axios';
import Url from './RouteUrl';
import { useNavigate } from "react-router-dom";

export const ImageUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [dataUrl, setDataUrl] = useState('');
  const [message, setMessage] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null); // State for uploaded image
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      // Check if dataUrl is already set
      if (!dataUrl) {
        setDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('dataUrl', dataUrl);
      const token = sessionStorage.getItem('token')

      const response = await axios.post(Url.imageupload, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('response.data: ', response.data);

      setMessage(response.data);
      if (response.data === "upload") {
        // navigate("/reader");
      }

      // Set the uploaded image to display above the input field
      setUploadedImage(dataUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage('Failed to upload image');
    }
  };

  return (
    <div className='img_uplde'>
      <div className='img_flex'>
        <input className="input-box" type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Image Upload</button>
        {message && <p>{message}</p>}
      </div>
      {uploadedImage && ( // Render the uploaded image if available
        <div className="uploaded-image-container">
          <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />
        </div>
      )}
      <div className='profile_pic'>
        <h2>Profile Picture</h2>
      </div>
    </div>
  );
};
