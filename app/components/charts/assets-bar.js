"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Gold", MC: 15.843 },
  { name: "Microsoft", MC: 3.134 },
  { name: "Apple", MC: 2.726 },
  { name: "Nvidia", MC: 2.204 },
  { name: "Alphabet", MC: 1.97 },
  { name: "Saudi Aramco", MC: 1.955 },
  { name: "Amazon", MC: 1.936 },
  { name: "Silver", MC: 1.578 },
  { name: "Bitcoin", MC: 1.324 },
  { name: "Meta", MC: 1.305 },
];

const BarChartComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div class={"m-10"}>
      <div className="flex flex-col m-3 text-base-content">
        <h1>
          Bitcoin Surges: Vaults to 8th Largest Asset Globally, Closing in on
          Silver
        </h1>

        <h2>Largest Assests in the World in Trillions of USD</h2>
      </div>

      {isClient ? (
        <BarChart
          width={800}
          height={600}
          data={data}
          layout="vertical"
          margin={{ left: 50 }}
        >
          <CartesianGrid />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="MC" fill="oklch(var(--s))" />
        </BarChart>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BarChartComponent;
