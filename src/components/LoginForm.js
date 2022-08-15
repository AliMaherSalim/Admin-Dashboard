import React from 'react'

export const LoginForm = () => {
  return (
    <div className='container'>
     <div className='row justify-content-center'>
        <div className='col-5 mt-4'>
        <form>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <button type='submit' className='btn btn-success w-100'>Login</button>
  </form>
        </div>
     </div>
  </div>
  )
}
