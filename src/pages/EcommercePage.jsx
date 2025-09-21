import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

// Demo avatars; use your own URLs or assets as desired
const initialOrders = [
  { id: "#CM9801", user: { name: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/50.jpg" }, project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", color: "#60a5fa" },
  { id: "#CM9802", user: { name: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/40.jpg" }, project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", color: "#34d399" },
  { id: "#CM9803", user: { name: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/43.jpg" }, project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", color: "#a78bfa" },
  { id: "#CM9804", user: { name: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/men/44.jpg" }, project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", color: "#f59e42" },
  { id: "#CM9805", user: { name: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }, project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", color: "#f87171" },
  { id: "#CM9801", user: { name: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/50.jpg" }, project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress", color: "#60a5fa" },
  { id: "#CM9802", user: { name: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/40.jpg" }, project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete", color: "#34d399" },
  { id: "#CM9803", user: { name: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/43.jpg" }, project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending", color: "#a78bfa" },
  { id: "#CM9804", user: { name: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/men/44.jpg" }, project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved", color: "#f59e42" },
  { id: "#CM9805", user: { name: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/68.jpg" }, project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected", color: "#f87171" },
];

const PAGE_SIZE = 8;
const statusList = ["All", "In Progress", "Complete", "Pending", "Approved", "Rejected"];

export default function EcommercePage() {
  // State hooks inside the component
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState([]);

  // Filtering orders
  const filtered = initialOrders.filter(
    order =>
      (status === "All" || order.status === status) &&
      (
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.user.name.toLowerCase().includes(search.toLowerCase()) ||
        order.project.toLowerCase().includes(search.toLowerCase()) ||
        order.address.toLowerCase().includes(search.toLowerCase())
      )
  );

  // Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginatedOrders = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Checkbox handlers
  const allChecked = paginatedOrders.length > 0 && paginatedOrders.every(o => selectedOrders.includes(o.id));
  const someChecked = paginatedOrders.some(o => selectedOrders.includes(o.id));

  function toggleSelectAll() {
    if (allChecked) setSelectedOrders([]);
    else setSelectedOrders(paginatedOrders.map(o => o.id));
  }

  function toggleSelect(id) {
    setSelectedOrders(sel =>
      sel.includes(id) ? sel.filter(sid => sid !== id) : [...sel, id]
    );
  }

  // Pagination handler
  function handlePage(n) {
    setPage(Math.max(1, Math.min(totalPages, n)));
  }

  return (
    <div style={{ background: "#181818", minHeight: "100vh", padding: "38px 0" }}>
      <div style={{color: "#fff", textAlign:"left", fontWeight: 700, fontSize: 20, margin: "0 0 18px 32px" }}>Order List</div>
      <div
        style={{
          margin: "0 auto",
          background: "#171718ff",
          borderRadius: "14px",
          padding: "8px 18px 10px 18px",
          width: "97%",
          maxWidth: "1800px",
          boxShadow: "0 5px 30px #0008"
        }}
      >
        {/* Toolbar Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <button style={toolbarBtn}><span role="img" aria-label="add">+</span></button>
            <button style={toolbarBtn}><span role="img" aria-label="sort">⇅</span></button>
            <select
              value={status}
              onChange={e => { setStatus(e.target.value); handlePage(1); }}
              style={{
                background: "#232428", color: "#fff", border: "1px solid #2a82bf", borderRadius: 7, padding: "3px 16px"
              }}
            >
              {statusList.map(st => (
                <option style={{ color: "#181818" }} key={st}>{st}</option>
              ))}
            </select>
          </div>
          <input
            style={{
              borderRadius: 7,
              border: "none",
              padding: "6px 34px 6px 12px",
              background: "#181818",
              color: "#fff",
              fontSize: 15,
              outline: "none",
              minWidth: "200px"
            }}
            placeholder="Search"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>
        {/* Order Table */}
        <div style={{ border: "1px solid #358eed", borderRadius: 12, padding: "7px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", color: "#f5f4f0", fontSize: "15px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #34353e" }}>
                <th><input type="checkbox" checked={allChecked} onChange={toggleSelectAll} style={{ accentColor: "#358eed", width: 14, height: 14 }} /></th>
                <th style={th}>Order ID</th>
                <th style={th}>User</th>
                <th style={th}>Project</th>
                <th style={th}>Address</th>
                <th style={th}>Date</th>
                <th style={th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((o, i) => (
                <tr key={o.id + "-" + i} style={{
                  background: i % 2 === 0 ? "#232428" : "#202125",
                  borderBottom: "1px solid #34353e"
                }}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(o.id)}
                      onChange={() => toggleSelect(o.id)}
                      style={{ accentColor: "#358eed", width: 16, height: 16 }}
                    />
                  </td>
                  <td style={tdBold}>{o.id}</td>
                  <td style={tdAvatar}>
                    <img src={o.user.avatar} alt={o.user.name} style={avatarImg} />
                    {o.user.name}
                  </td>
                  <td style={td}>{o.project}</td>
                  <td style={td}>{o.address}</td>
                  <td style={{ ...td, color: "#aaa" }}>{o.date}</td>
                  <td style={tdBold}>
                    <span style={{ color: o.color }}>● {o.status}</span>
                  </td>
                </tr>
              ))}
              {!paginatedOrders.length && (
                <tr>
                  <td colSpan={7} style={{ textAlign: "center", padding: 25, color: "#666" }}>No orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "flex-end", margin: "14px 7px 4px 7px" }}>
          <button style={paginationBtn} onClick={() => handlePage(page - 1)} disabled={page <= 1}>&lt;</button>
          {Array.from({ length: totalPages }, (v, n) => n + 1).map(n => (
            <button
              key={n}
              style={n === page ? paginationActiveBtn : paginationBtn}
              onClick={() => handlePage(n)}
            >{n}</button>
          ))}
          <button style={paginationBtn} onClick={() => handlePage(page + 1)} disabled={page >= totalPages}>&gt;</button>
        </div>
      </div>
    </div>
  );
}


const toolbarBtn = {
  background: "#181818",
  border: "1px solid #258eed",
  color: "#23aaff",
  fontSize: 19,
  borderRadius: 6,
  padding: "3px 12px",
  cursor: "pointer"
};
const th = { textAlign: "left", padding: "12px 8px", fontWeight: 700, color: "#ececec" };
const td = { padding: "13px 9px" };
const tdBold = { ...td, fontWeight: 600 };
const tdAvatar = { ...td, display: 'flex', alignItems: "center" };
const avatarImg = { width: 27, height: 27, borderRadius: "50%", marginRight: 10, border: "1.5px solid #374962" };
const paginationBtn = {
  background: "#232428",
  color: "#bebebe",
  border: "1px solid #333",
  borderRadius: 6,
  padding: "3px 12px",
  margin: "0 1.5px",
  cursor: "pointer"
};
const paginationActiveBtn = {
  ...paginationBtn,
  background: "#23aaff",
  color: "#fff"
};

