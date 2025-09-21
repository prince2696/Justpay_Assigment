import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ display: "flex", height: "100vh",width:"100vw" }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column",padding: 0,margin:1 }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
