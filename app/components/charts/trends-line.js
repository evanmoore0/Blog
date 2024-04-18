"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Papa from "papaparse";

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/multiTimeline.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);

      const parsedData = Papa.parse(csv, { header: true }).data;

      const formattedData = parsedData.map((item) => ({
        Month: item.Month,
        "Bitcoin: (Worldwide)": parseFloat(item["Bitcoin: (Worldwide)"]),
        "Gold: (Worldwide)": parseFloat(item["Gold: (Worldwide)"]),
      }));

      setData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div class={"m-10"}>
      <div className="flex flex-col m-3 text-base-content">
        <h1>Bitcoin is on track to be more popular than gold </h1>

        <h2>Bitcoin and Gold Google Trends Searches from 2010-2023</h2>
      </div>

      <LineChart width={800} height={600} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Bitcoin: (Worldwide)"
          stroke="oklch(var(--a))"
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Gold: (Worldwide)"
          stroke="oklch(var(--a))"
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
