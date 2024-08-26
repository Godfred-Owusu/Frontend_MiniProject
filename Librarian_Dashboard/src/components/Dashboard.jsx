import { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import Chart from "./Chart/DoughnutChart";
import BarChart from "./Chart/BarChart";
// import Books from "./Books";
import axios from "axios";
import Students from "./Students";
const Dashboard = () => {
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
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

    const countStudent = async () => {
      try {
        console.log("Fetching total students count..."); // Log before the API call
        const response = await axios.get(
          "https://backend-mini-project-45cj.vercel.app/api/students/countStudent"
        );
        console.log("Students count response:", response.data); // Log after receiving the response
        setTotalStudents(response.data.total);
        console.log("Total students:", response.data); // Log total students after setting the state
      } catch (error) {
        console.error("Error fetching students count:", error); // Improved error logging
      }
    };
    countBook();
    countStudent();
  }, []);

  return (
    <div className="dark">
      <div className="flex justify-between">
        <DashboardCard
          title="Books in Library"
          number={totalBooks}
          color="bg-red-500"
        />
        <DashboardCard
          title="Borrowed Books "
          number={totalStudents}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Returned Books"
          number="5"
          color="bg-yellow-500"
        />
        <DashboardCard title="Misplaced Books" number="0" color="bg-black" />
      </div>
      <div className="flex justify-around items-center my-10">
        <div>
          <Chart />
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <div>
        <Students />
      </div>
    </div>
  );
};

export default Dashboard;
