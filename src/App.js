import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Admins from './pages/Admins';
import Login from './pages/Login';
import Comments from './pages/Comments';
import Link from './pages/Link';
import Sara from './pages/Sara';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     {/* <Route path='/' element={<Login/>} /> */}
     <Route path='/' element={<Home/>} />
     <Route path='/posts' element={<Posts/>} />
     <Route path='/link' element={<Link/>}/>
     <Route path='/users' element={<Users/>} />
     <Route path='/admins' element={<Admins/>} />
     <Route path='/comments' element={<Comments/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/sara' element={<Sara/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
