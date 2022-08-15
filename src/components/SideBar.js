import React,{useState} from 'react'
import Card from './Card'
import {Link} from 'react-router-dom';
import AdminImg from '../assets/img/img.jpg'

const SideBar = () => {
    const [toggleUsers,setToggleUsers]=useState(false);
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column mt-3 align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none" style={{ backgroundcolor:"red"}}>
                    <span className="fs-5 d-none d-sm-inline">ZombieHat</span>
                </a>

                <div className="dropdown pb-4 mt-5              ">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={AdminImg} alt="hugenerd" width="75" height="80" className="rounded-circle"/>
                        {/* <img href="../assets/img/img.jpg" alt="hugenerd" width="30" height="30" className="rounded-circle"/> */}
                        <span className="d-none d-sm-inline mx-2">Alolo</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                   
                        <li><a className="dropdown-item" href="#">Sign out</a></li>

                    </ul>
                   
                </div>

                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-5" id="menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Users</span>
                        </Link>
                    </li>

                                <li>
                        <Link to="/posts" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Posts</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Login</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/link" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Link</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sara" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Sara</span>
                        </Link>
                    </li>
                </ul>
                <hr/>
            </div>
        </div>
      
    </div>
</div>
  )
}

export default SideBar