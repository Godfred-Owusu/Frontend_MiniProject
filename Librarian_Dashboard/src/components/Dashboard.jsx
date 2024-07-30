import { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import Chart from "./Chart/DoughnutChart";
import BarChart from "./Chart/BarChart";
// import Books from "./Books";
import axios from "axios";
const Dashboard = () => {
  const [totalBooks, setTotalBooks] = useState(0);
  useEffect(() => {
    const countBook = async () => {
      try {
        const response = await axios.get(
          "https://backend-mini-project-45cj.vercel.app/api/books/count"
        );
        setTotalBooks(response.data.total);
      } catch (error) {
        console.error({ "Error fetching books": error });
      }
    };
    countBook();
  }, []);

  return (
    <div className="dark">
      <div className="flex justify-between">
        <DashboardCard
          title="Total Books Borrowed"
          number={totalBooks}
          color="bg-red-500"
        />
        <DashboardCard
          title="Borrowed Books "
          number="500"
          color="bg-blue-500"
        />
        <DashboardCard
          title="Returned Books"
          number="500"
          color="bg-yellow-500"
        />
        <DashboardCard title="Misplaced Books" number="500" color="bg-black" />
      </div>
      <div className="flex justify-around items-center my-10">
        <div>
          <Chart />
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <div>{/* <Books /> */}</div>
    </div>
  );
};

export default Dashboard;
