// src/components/LatestTrends.js
import React from "react";
import "./LatestTrends.css";

const trends = [
  { id: "1", name: "Trend 1", imagePath: "/trends/trend1.png" },
  { id: "2", name: "Trend 2", imagePath: "/trends/trend2.png" },
  { id: "3", name: "Trend 3", imagePath: "/trends/trend3.png" },
  { id: "4", name: "Trend 4", imagePath: "/trends/trend4.png" },
];

function LatestTrends() {
  return (
    <div className="trends-section">
      <h2>Latest Fashion Trends</h2>
      <div className="trend-container">
        {trends.map((trend) => (
          <div key={trend.id} className="trend-card">
            <img src={trend.imagePath} alt={trend.name} />
            <span>{trend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestTrends;
