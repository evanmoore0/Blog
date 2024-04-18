
'use client'
import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Papa from 'papaparse';

const Chart = () => {
  const [data, setData] = useState([]);
  const [priceDomain, setPriceDomain] = useState([0, 0]);
  const [volumeDomain, setVolumeDomain] = useState([0, 0]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data/BTC-USD.csv');
      if (!response.ok) {
        console.error('Failed to fetch data');
        return;
      }

      const file = await response.text();
      const parsedData = Papa.parse(file, { header: true }).data;

      const prices = parsedData.map(entry => parseFloat(entry.Close));
      const volumes = parsedData.map(entry => parseFloat(entry.Volume));

      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      const minVolume = Math.min(...volumes);
      const maxVolume = Math.max(...volumes);

      setPriceDomain([minPrice, maxPrice]);
      setVolumeDomain([minVolume, maxVolume]);

      setData(parsedData);
    };

    fetchData();
  }, []);

  return (
    <div>
        <div className="flex flex-col m-3 text-base-content">
        <h1>
          Crypto Millionaires: the Chart that Created Them
        </h1>

        <h2>Bitcoin Price and Volume from 2015 - 2024</h2>
      </div>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis yAxisId="left" domain={priceDomain}  orientation="right" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Close" stroke="#8884d8" yAxisId="left" />
      </LineChart>
      <h2>Volume Chart</h2>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis yAxisId="right" orientation="right" domain={volumeDomain} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Volume" fill="#82ca9d" yAxisId="right" />
      </BarChart>
    </div>
  );
};

export default Chart;
