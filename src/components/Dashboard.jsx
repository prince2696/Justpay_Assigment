import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

// Sample or real data
const projectionData = [
  { month: "Jan", value: 10 },
  { month: "Feb", value: 22 },
  { month: "Mar", value: 18 },
  { month: "Apr", value: 25 },
  { month: "May", value: 15 },
  { month: "Jun", value: 23 }
];

const revenueDataCurrent = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 16 },
  { month: "Mar", value: 14 },
  { month: "Apr", value: 22 },
  { month: "May", value: 27 },
  { month: "Jun", value: 30 }
];

const revenueDataPrev = [
  { month: "Jan", value: 15 },
  { month: "Feb", value: 13 },
  { month: "Mar", value: 19 },
  { month: "Apr", value: 17 },
  { month: "May", value: 16 },
  { month: "Jun", value: 21 }
];

const pieData = [
  { name: "Direct", value: 300.56, color: "#4ade80" },
  { name: "Affiliate", value: 135.18, color: "#818cf8" },
  { name: "Sponsored", value: 154.02, color: "#a78bfa" },
  { name: "E-mail", value: 48.96, color: "#60a5fa" }
];

const TopSellingProducts = [
  { name: "ASOS Ridley High Waist", price: 79.49, quantity: 82, amount: 6518.18 },
  { name: "Marco Lightweight Shirt", price: 128.5, quantity: 37, amount: 4754.5 },
  { name: "Half Sleeve Shirt", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20, quantity: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, quantity: 64, amount: 1965.81 }
];

// Card component
function Card({ title, value, percentage, blue }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        background: blue ? "#eaf6fb" : "#232428",
        color: blue ? "#222e38" : "#fff",
        padding: "22px",
        minWidth: "150px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        boxShadow: "0 2px 8px #0001"
      }}
    >
      <div style={{ fontWeight: "600", fontSize: "17px", marginBottom: "3px" }}>{title}</div>
      <div style={{ fontWeight: "800", fontSize: "26px" }}>
        {value}
        {percentage && (
          <span style={{ fontWeight: 500, fontSize: 13, color: "#24c77b", marginLeft: 8 }}>
            {percentage}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  // Combine revenue data for line chart
  const combinedRevenueData = revenueDataCurrent.map((entry, i) => ({
    month: entry.month,
    current: entry.value,
    previous: revenueDataPrev[i]?.value
  }));

  return (
    <div
      style={{
        background: "#17181a",
        // minHeight: "100vh",
        // minWidth:"100vw",
        padding: "25px",
        fontFamily: "Inter, Arial, sans-serif"
      }}
    >
      {/* Top metrics and BarChart */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 2fr",
          gap: "24px",
          marginBottom: "24px"
        }}
      >
        <Card title="Customers" value="3,781" percentage="+11.01%" blue />
        <Card title="Orders" value="1,219" percentage="-0.03%" />
        <Card title="Revenue" value="$695" percentage="+15.03%" />
        <Card title="Growth" value="30.1%" percentage="+6.08%" blue />
        <div
          style={{
            background: "#232428",
            borderRadius: "12px",
            minHeight: "110px",
            padding: "22px 20px"
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "3px" }}>Projections vs Actuals</div>
          <ResponsiveContainer width="100%" height={60}>
            <BarChart data={projectionData}>
              <XAxis dataKey="month" stroke="#8ba6b7" fontSize={11} />
              <Tooltip />
              <Bar dataKey="value" fill="#7cb8f7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue and Revenue by Location side by side */}
      <div style={{ display: "flex", gap: "24px", marginBottom: "24px" }}>
        <div
          style={{
            background: "#232428",
            borderRadius: "16px",
            padding: "24px 30px",
            flex: 2,
            minWidth: "0"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "18px", gap: "16px" }}>
            <span style={{ fontWeight: 700, fontSize: 17, marginRight: 8 }}>Revenue</span>
            <span style={{ display: "flex", alignItems: "center", marginRight: 18 }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "#60a5fa",
                  borderRadius: "50%",
                  marginRight: 6,
                  display: "inline-block"
                }}
              ></span>
              <span style={{ color: "#b3b2bc" }}>
                Current Week <span style={{ color: "#fff", fontWeight: 700 }}>$58,211</span>
              </span>
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "#a78bfa",
                  borderRadius: "50%",
                  marginRight: 6,
                  display: "inline-block"
                }}
              ></span>
              <span style={{ color: "#b3b2bc" }}>
                Previous Week <span style={{ color: "#fff", fontWeight: 700 }}>$68,768</span>
              </span>
            </span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={combinedRevenueData}>
              <XAxis
                dataKey="month"
                tick={{ fill: "#aaa", fontSize: 13 }}
                axisLine={{ stroke: "#35353c" }}
                tickLine={false}
              />
              <YAxis tick={{ fill: "#aaa", fontSize: 13 }} axisLine={false} tickLine={false} domain={[0, 30]} tickFormatter={(val) => `${val}M`} />
              <Tooltip
                contentStyle={{ background: "#222", border: "0", borderRadius: 8, color: "#fa0" }}
                labelStyle={{ color: "#84a0fa" }}
              />
              <Line type="monotone" dataKey="current" stroke="#60a5fa" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="previous" stroke="#a78bfa" strokeWidth={3} dot={false} strokeDasharray="5 6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            background: "#232428",
            borderRadius: "16px",
            padding: "24px 22px",
            width: "250px",
            minWidth: "200px",
            color: "#b0b0b0"
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}>Revenue by Location</div>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
            <li style={{ justifyContent: "space-between", display: "flex", marginBottom: "10px" }}>
              <span>New York</span>
              <span style={{ color: "#fff" }}>72K</span>
            </li>
            <li style={{ justifyContent: "space-between", display: "flex", marginBottom: "10px" }}>
              <span>San Francisco</span>
              <span style={{ color: "#fff" }}>39K</span>
            </li>
            <li style={{ justifyContent: "space-between", display: "flex", marginBottom: "10px" }}>
              <span>Sydney</span>
              <span style={{ color: "#fff" }}>25K</span>
            </li>
            <li style={{ justifyContent: "space-between", display: "flex" }}>
              <span>Singapore</span>
              <span style={{ color: "#fff" }}>61K</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Products and Total Sales */}
      <div style={{ display: "flex", gap: "24px" }}>
        <div
          style={{
            background: "#232428",
            borderRadius: "16px",
            padding: "24px 18px",
            flex: "2",
            marginBottom: "16px"
          }}
        >
          <div style={{ textAlign: "center", fontWeight: 700, fontSize: 22, marginBottom: "16px" }}>Top Selling Products</div>
       <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "18px"
        }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 700 }}>Name</th>
              <th style={{ textAlign: "right", padding: "10px 12px", fontWeight: 700 }}>Price</th>
              <th style={{ textAlign: "right", padding: "10px 12px", fontWeight: 700 }}>Quantity</th>
              <th style={{ textAlign: "right", padding: "10px 12px", fontWeight: 700 }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {TopSellingProducts.map((item, idx) => (
              <tr key={idx}
                style={{
                  borderBottom: idx < TopSellingProducts.length - 1 ? "1px solid #34353e" : "none"
                }}>
                <td style={{ textAlign: "left", padding: "16px 12px", color: "#e9e9ea" }}>{item.name}</td>
                <td style={{ textAlign: "right", padding: "16px 12px" }}>${item.price.toFixed(2)}</td>
                <td style={{ textAlign: "right", padding: "16px 12px" }}>{item.quantity}</td>
                <td style={{ textAlign: "right", padding: "16px 12px" }}>${item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
         {/* Total Sales Section */}
        <div
          style={{
        width: "325px",
        background: "#232428",
        borderRadius: "16px",
        padding: "38px 18px 24px 18px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
          }}>
        <div style={{ fontWeight: 700, fontSize: 22, marginBottom: "12px", color: "#fff" }}>Total Sales</div>
          <ResponsiveContainer width={210} height={170}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={65}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ul
            style={{
              marginTop: "18px",
              paddingLeft: 0,
              listStyle: "none",
              width: "100%"
            }}
          >
            {pieData.map((entry, idx) => (
            <li key={entry.name} style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, margin: "11px 0" }}>
              <span style={{ minWidth: 80 }}>{entry.name}</span>
              <span>${entry.value.toFixed(2)}</span>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
