import { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import { format } from "date-fns";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiProhibited2Fill } from "react-icons/ri";
import { Tooltip } from "react-tooltip";

import { Link } from "react-router-dom";
// import MUIDataTable from "mui-datatables";
// import { data } from "../lib/data/Bookdata";

const Students = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await axios.get(
          "https://backend-mini-project-45cj.vercel.app/api/students"
        );
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getStudent();
  }, []);
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Student Name
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Class
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Books Borrowed
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">
                {student.name}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {student.class}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {format(new Date(student.dateBorrowed), "dd-MM-yyyy")}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                <div className="flex gap-3">
                  <IoCheckmarkCircleSharp
                    id="submit-tooltip"
                    className="cursor-pointer text-green-500 text-2xl"
                  />
                  <Tooltip anchorSelect="#submit-tooltip" place="top">
                    Submit
                  </Tooltip>

                  <RiProhibited2Fill
                    id="misplace-tooltip"
                    className="cursor-pointer text-red-500 text-2xl"
                  />
                  <Tooltip anchorSelect="#misplace-tooltip" place="top">
                    Misplace Book
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;

// import MUIDataTable from "mui-datatables";
// import { data } from "../lib/data/Bookdata";
// import { Link } from "react-router-dom";

// const Books = () => {
//   const columns = [
//     {
//       name: "title",
//       label: "Title",
//       options: {
//         filter: true,
//         sort: true,
//       },
//     },
//     {
//       name: "company",
//       label: "Company",
//       options: {
//         filter: true,
//         sort: false,
//       },
//     },
//     {
//       name: "quantity",
//       label: "Quantity",
//       options: {
//         filter: true,
//         sort: false,
//       },
//     },
//     {
//       name: "status",
//       label: "Status",
//       options: {
//         filter: true,
//         sort: false,
//       },
//     },
//   ];

//   // const data = [
//   //   ["Joe James", "Test Corp", "Yonkers", "NY"],
//   //   ["John Walsh", "Test Corp", "Hartford", "CT"],
//   //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
//   //   ["James Houston", "Test Corp", "Dallas", "TX"],
//   // ];

//   const options = {
//     filterType: "checkbox",
//   };

//   return (
//     <>
//       <Link to="/add-book">
//         <div className="border px-2 py-1 text-center bg-red-500 text-white cursor-pointer hover:scale-105">
//           Add Book
//         </div>
//       </Link>
//       <div className="w-full overflow-x-hidden">
//         <MUIDataTable
//           title={"Employee List"}
//           data={data}
//           columns={columns}
//           options={options}
//         />
//       </div>
//     </>
//   );
// };
