'use client'


import ActiveAddressesLineChart from "../../components/charts/bitcoin-mining-line";
import LineChartComponent from "../../components/charts/trends-line";
import BarChartComponent from "../../components/charts/assets-bar";

import Layout from "@/app/components/layout";


export default function Blog() {
  return (
    <Layout>
      <div className="flex flex-col w-screen justify-center items-center">
        <BarChartComponent />
        <ActiveAddressesLineChart />
        <LineChartComponent />
      </div>
    </Layout>
  );
}
