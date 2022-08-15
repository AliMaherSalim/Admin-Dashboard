import React, { useEffect, useMemo, useState } from "react";
import SideBar from "../components/SideBar";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../components/Data/User Data/UsersData.json";
import { COLUMNS } from "../components/Data/User Data/UserColumns";
import "../components/Data/User Data/table.css";
import ConfirmDel from "../components/ConfirmDel";
import { axiosInstance } from "../network/axiosInstance";
import { addUserData } from "../Store/UserSlice/UserDataSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// Linking with the backend\

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axiosInstance.get("/admin/users").then((res) => {
      console.log(res.data);
      dispatch(addUserData(res.data));
      const persons = res.data;
    });
  }, []);
  const userState = useSelector(state=>state.userData.userData);
  console.log(userState);
  const [del, setDel] = useState(false);
  const [delID, setDelid] = useState(false);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
  } = useTable({
    columns,
    data,
  });
  /* const confirmDel = () =>{
    setDel(true)
  } */

  return (
    // <div className="container-fluid">
    //   <div className="row flex no-wrap">
    //     <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
    //       <SideBar />
    //     </div>
    //     <div className="col py-3">
    //       Users
    //       <table {...getTableProps()}>
    //         <thead>
    //           {headerGroups.map((headerGroup) => (
    //             <tr {...headerGroup.getHeaderGroupProps()}>
    //               {headerGroup.headers.map((column) => (
    //                 <th {...column.getHeaderProps()}>
    //                   {column.render("Header")}
    //                 </th>
    //               ))}
    //               <th>delete post</th>
    //             </tr>
    //           ))}
    //         </thead>
    //         <tbody {...getTableBodyProps()}>
    //           {page.map((row, index) => {
    //             prepareRow(row);
    //             return (
    //               <tr {...row.getRowProps()}>
    //                 {row.cells.map((cell, index) => {
    //                   return (
    //                     <ul>
    //                       {
    //                         this.state.persons.map(person => 
    //                           <li key={person.id}>{person.name}</li>
    //                           )
    //                       }
    //                     </ul>
    //                     // <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
    //                   );
    //                 })}
    //                 <div className="text-center">
    //                   <button
    //                     onClick={() => {
    //                       setDel((prev) => !prev);
    //                       setDelid(index);
    //                       console.log("hhh");
    //                     }}
    //                     type="button"
    //                     className="btn btn-danger"
    //                   >
    //                     Delete
    //                   </button>
    //                   {
    //                     <ConfirmDel
    //                       id={index}
    //                       del={del}
    //                       delID={delID}
    //                       setDel={setDel}
    //                     />
    //                   }
    //                 </div>
    //               </tr>
    //             );
    //           })}
    //         </tbody>
    //         {/* <tfoot>
    //       {footerGroups.map(footerGroup => (
    //         <tr {...footerGroup.getFooterGroupProps()}>
    //           {footerGroup.headers.map(column => (
    //             <td {...column.getFooterProps()}>{column.render('Footer')}</td>
    //           ))}
    //         </tr>
    //       ))}
    //     </tfoot> */}
    //       </table>
    //       <div>
    //         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
    //           {"<<"}
    //         </button>{" "}
    //         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
    //           Previous
    //         </button>{" "}
    //         <button onClick={() => nextPage()} disabled={!canNextPage}>
    //           Next
    //         </button>{" "}
    //         <button
    //           onClick={() => gotoPage(pageCount - 1)}
    //           disabled={!canNextPage}
    //         >
    //           {">>"}
    //         </button>{" "}
    //         <span>
    //           Page{" "}
    //           <strong>
    //             {pageIndex + 1} of {pageOptions.length}
    //           </strong>{" "}
    //         </span>
    //         <span>
    //           | Go to page:{" "}
    //           <input
    //             type="number"
    //             defaultValue={pageIndex + 1}
    //             onChange={(e) => {
    //               const pageNumber = e.target.value
    //                 ? Number(e.target.value) - 1
    //                 : 0;
    //               gotoPage(pageNumber);
    //             }}
    //             style={{ width: "50px" }}
    //           />
    //         </span>{" "}
    //         <select
    //           value={pageSize}
    //           onChange={(e) => setPageSize(Number(e.target.value))}
    //         >
    //           {[10, 25, 50].map((pageSize) => (
    //             <option key={pageSize} value={pageSize}>
    //               Show {pageSize}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Users;
