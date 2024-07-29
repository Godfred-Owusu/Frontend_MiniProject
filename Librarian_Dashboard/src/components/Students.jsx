import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import { data } from "../lib/data/Bookdata";

const Students = () => {
  const columns = [
    {
      name: "title",
      label: "Title",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "quantity",
      label: "Quantity",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "status",
      label: "Status",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  // const data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <div>
      <div className="flex items-center gap-2  ">
        <Link
          to="/students/add-student"
          className="ml-auto w-fit bg-red-500 flex justify-start items-center gap-3 text-white px-3 py-1 rounded cursor-pointer"
        >
          <IoMdAdd />
          <p>Add Student</p>
        </Link>
      </div>
      <div className="w-full overflow-x-hidden">
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
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
