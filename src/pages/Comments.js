import React, { useMemo, useState,useEffect } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from '../components/Data/User Data/PostsData.json'
import { COLUMNS } from '../components/Data/User Data/PostsColumns'
import '../components/Data/User Data/table.css'
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom'
const axios = require('axios').default;


export const Comments = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const [postData,setPostData]=useState([]);

  const [ del, setDel] = useState(false);
  const [ delID, setDelid] = useState(false);
  useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then((res)=>setPostData(res.data))
     .catch((err)=>console.log(err));
  }, []);
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
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex, pageSize } = state


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

    const confirmDel = () =>{
      setDel(true)
    }

  return (
        <div className='container-fluid'>
        <div className='row flex no-wrap'>
         <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
             <SideBar/>
         </div>
         <div className="col py-3">
           <h1>comments</h1>
           
             <table {...getTableProps()}>
        <thead>
            <tr>   
                {/* <th>Creator FirstName</th>
                <th>Creator LastName</th>
                <th>Created At</th>
                <th>Country</th>
                <th>User Phone</th>
                <th>Creator Name</th>
                <th>User Email</th>
                <th>Delete Post</th> */}
                <th>user id</th>
                <th>post id</th>
                <th>title</th>
                <th>body</th>
                <th>Delet</th>
            </tr>
      
        </thead>
        <tbody>
          {postData &&postData.map((post,index)=>(
    
              <tr key={index}>
                   <td >{post.userId}</td>
                   <td >{post.id}</td>
                   <Link to='/comments' className='text-decoration-none'>
                   <td >{post.title}</td>
                   </Link>
                   <td >{post.body}</td>          
                 <div className='text-center'>
                <button  type="button" className="btn btn-danger">Delete</button>
                </div>
              </tr>
            
    ))}
        </tbody>
       
      </table>
             
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div>
        </div>
        </div>
     </div>
      )
            }
export default Comments;