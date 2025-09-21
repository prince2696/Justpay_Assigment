import React from "react";

export default function Navbar() {
  return (
    <div
      style={{
        height: "50px",
        background: "#181818",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px 10px",
        color: "#ececec",
        borderBottom: "1px solid #232323"
      }}
    >
      {/* Left Section: Menu/Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Sidebar icon (uses emoji, replace with svg if available) */}
        <span style={{ fontSize: "20px", cursor: "pointer" }}>📋</span>
        {/* Breadcrumb */}
        <span style={{ color: "#8a8a8a", marginLeft: "12px", marginRight: "4px" }}>
          Dashboards
        </span>
        <span style={{ fontWeight: "bold" }}> / Default</span>
      </div>

      {/* Center: Search Box */}
      <div style={{ flex: "0 0 300px", position: "relative" }}>
        <input
          placeholder="Search"
          style={{
            width: "100%",
            padding: "8px 32px 8px 8px",
            background: "#232323",
            border: "none",
            borderRadius: "6px",
            color: "#ececec",
            outline: "none"
          }}
        />
        {/* Search icon, rightmost inside input */}
        <span
          style={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#555"
          }}
        >
          🔍
        </span>
      </div>

      {/* Right section: Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Theme toggle */}
        <span style={{ fontSize: "20px", cursor: "pointer" }} title="Theme">
          🌞
        </span>
        {/* Refresh/Redo */}
        <span style={{ fontSize: "20px", cursor: "pointer" }} title="Refresh">
          🔄
        </span>
        {/* Notifications */}
        <span style={{ fontSize: "20px", cursor: "pointer" }} title="Notifications">
          🔔
        </span>
        {/* User/Monitor */}
        <span style={{ fontSize: "20px", cursor: "pointer" }} title="Profile">
          🖥️
        </span>
      </div>
    </div>
  );
}
