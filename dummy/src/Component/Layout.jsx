import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="main">
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <h1>Meow Chat</h1>
        <p>Its a chat application......</p>
        <p>
          {" "}
          <a href="/imageUpload">Profile Picture</a>
        </p>

        <p>
          {" "}
          <a href="/reader">Users</a>
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <div
        style={{
          height: "100px",
          backgroundColor: "lightgreen",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Footer</p>
      </div>
    </div>
  );
};

// Sample project content
export const ProjectContent = () => {
  return (
    <div>
      <h2>Welcome to Meow Chat!</h2>
      <p>Start chatting with your friends and loved ones.</p>
      <p>Features:</p>
      <ul>
        <li>Real-time messaging</li>
        <li>Group chats</li>
        <li>Emojis and stickers</li>
      </ul>
    </div>
  );
};
