import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../components/Data/User Data/PostsData.json";
import { COLUMNS } from "../components/Data/User Data/PostsColumns";
import "../components/Data/User Data/table.css";
import SideBar from "../components/SideBar";
import { axiosInstance } from "../network/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../Store/UserSlice/UserDataSlice";
import { DataGrid } from "@mui/x-data-grid";

const Posts = () => {
  const userState = useSelector((state) => state.userData.userDate);

  const dispatch = useDispatch();

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
  ];

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/admin/users")
      .then((res) => {
        dispatch(addUserData(res.data));
        setPostData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row flex no-wrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <SideBar />
        </div>
        <div className="col py-3">
          Posts and comments
          <DataGrid
            rows={postData} 
            getRowId={(_id) => {
              return _id;
            }}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};
export default Posts;
                     