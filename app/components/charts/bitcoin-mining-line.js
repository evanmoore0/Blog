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

const ActiveAddressesLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/bitcoin.csv"); // Replace 'your_csv_file.csv' with your CSV file path
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);

      const parsedData = Papa.parse(csv, { header: true }).data;

      const formattedData = parsedData.map((item) => ({
        date: item.date,
        activeAddresses: parseInt(item.activeAddresses),
        generatedCoins: parseInt(item.generatedCoins),
      }));

      setData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div class={"m-10"}>
      <div className="flex flex-col m-3 text-base-content">
        <h1>
          Will Bitcoin Mining be Profitable in the Future?
        </h1>

        <h2>Number of Bitcoin's Generated from Mining from 2009-2018</h2>
      </div>
      <LineChart width={800} height={600} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="activeAddresses" stroke="#8884d8" dot={false} />  */}
        <Line
          type="monotone"
          dataKey="generatedCoins"
          stroke="oklch(var(--p))"
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default ActiveAddressesLineChart;
