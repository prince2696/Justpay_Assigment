import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Dashboard from "../components/Dashboard";

export default function HomePage() {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar with fixed width */}
      {/* <div style={{ width: "260px", backgroundColor: "#1f1f1f" }}>
        <Sidebar />
      </div> */}

      {/* Main section for Navbar and Dashboard */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#181818",
          overflow: "hidden",
        }}
      >
        {/* Navbar at top with fixed height */}
        {/* <div style={{ height: "60px", backgroundColor: "#252525" }}>
          <Navbar />
        </div> */}

        {/* Dashboard fills remaining space */}
        <div style={{ flexGrow: 1, overflowY: "auto" }}>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
