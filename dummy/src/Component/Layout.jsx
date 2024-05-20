import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="main">
<div>
  </div>      
      <div style={{  flex:1}}>

      <Outlet />
      </div>
      <div style={{height: '100px',}}>Footer</div>
    </div>
  );
};
