import React from 'react'

const Comment = () => {
  return (
        <div className='container-fluid'>
        <div className='row flex no-wrap'>
         <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
             <SideBar/>
         </div>
         <div className="col py-3">
             Posts   and    comments
             <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th>delete post</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
                 <div className='text-center'>
                <button onClick={()=>{setDel(prev=>!prev); setDelid(index)}} type="button" class="btn btn-danger">Delete</button>
                {<ConfirmDel id={index} del={del} delID={delID} setDel={setDel}/>}
                </div>
              </tr>
            )
          })}
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

export default Comment