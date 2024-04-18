import Layout from "../components/layout";

import BarChartComponent from "../components/charts/assets-bar";
import ActiveAddressesLineChart from "../components/charts/bitcoin-mining-line";
import LineChartComponent from "../components/charts/trends-line";
import Chart from "../components/charts/btc-price";

export default function Blog() {
  return (
    <Layout>
      <div className="flex flex-col w-screen justify-center items-center">
        <BarChartComponent />

        <ActiveAddressesLineChart />

        <LineChartComponent />

        <Chart/>
      </div>
    </Layout>
  );
}
