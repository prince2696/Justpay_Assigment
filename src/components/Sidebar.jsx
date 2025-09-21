import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [dashboardsOpen, setDashboardsOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  return (
    <aside className="sidebar" role="navigation" aria-label="Main Navigation">
      <h1>Prince Ranjan</h1>

      <nav>
        {/* Favorites Dropdown */}
        <div>
          <h2 
            style={{ cursor: "pointer", userSelect: "none" }} 
            onClick={() => setFavoritesOpen(!favoritesOpen)}
          >
            Favorites {favoritesOpen ? "▲" : "▼"}
          </h2>
          {favoritesOpen && (
            <ul>
              <li>Overview</li>
              <li>Projects</li>
            </ul>
          )}
        </div>

        {/* Dashboards Dropdown */}
        <div>
          <h2
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setDashboardsOpen(!dashboardsOpen)}
          >
            Dashboards {dashboardsOpen ? "▲" : "▼"}
          </h2>
          {dashboardsOpen && (
            <ul>
                <li className="font-bold">Default</li>
                <li>
                <Link to="/ecommerce" style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', display: 'block', padding: '4px 0' }}>
                 eCommerce
                 </Link>
                 </li>
                 <li>Projects</li>
                 <li>Online Courses</li>
            </ul>
          )}
        </div>

        {/* Pages Dropdown */}
        <div>
          <h2
            style={{ cursor: "pointer", userSelect: "none" }}
            onClick={() => setPagesOpen(!pagesOpen)}
          >
            Pages {pagesOpen ? "▲" : "▼"}
          </h2>
          {pagesOpen && (
            <ul>
              <li
                style={{ cursor: "pointer", userSelect: "none" }} 
                onClick={(e) => {
                  e.stopPropagation();
                  setUserProfileOpen(!userProfileOpen);
                }}
              >
                User Profile {userProfileOpen ? "▲" : "▼"}
              </li>
              {userProfileOpen && (
                <>
                  <li style={{ paddingLeft: "15px" }}>Overview</li>
                  <li style={{ paddingLeft: "15px" }}>Projects</li>
                  <li style={{ paddingLeft: "15px" }}>Campaigns</li>
                  <li style={{ paddingLeft: "15px" }}>Documents</li>
                  <li style={{ paddingLeft: "15px" }}>Followers</li>
                </>
              )}
              <li>Account</li>
              <li>Corporate</li>
              <li>Blog</li>
              <li>Social</li>
            </ul>
          )}
        </div>
      </nav>
    </aside>
  );
}
