import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import './SideBar.css'
import { NavLink, Routes, Route } from 'react-router-dom';
import MyMoves from '../Components/MyMoves'
import MyProfile from '../Components/MyProfile'
import GetQuote from '../Components/GetQuote'
import Logout from '../Components/Logout'
const SideNav = () => {
  return (
    <div className='row fixed'>
      <div className='col-1 col-lg-2 mt-5 mb-5'>
        <div style={{ height: '80vh', fontSize: '190%' }}>
          <CDBSidebar style={{ paddingTop: '200px', minWidth: '100px', width: '230px' }} className='sidebar'>
            <CDBSidebarContent className="sidebar-content" textColor='white'>
              <CDBSidebarMenu>
                <NavLink to="my_moves" >
                  <CDBSidebarMenuItem >My Moves</CDBSidebarMenuItem>
                </NavLink>
                <hr />
                <NavLink to="my_profile" >
                  <CDBSidebarMenuItem >My Profile</CDBSidebarMenuItem>
                </NavLink>
                <hr />
                <NavLink to="get_quote" >
                  <CDBSidebarMenuItem >Get Quote</CDBSidebarMenuItem>
                </NavLink>
                <hr />
                <NavLink to="log_out" >
                  <CDBSidebarMenuItem >LogOut</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
      </div>
      <div className='col col-lg-10 mt-5'>
        <Routes>
          <Route path='/' element={<MyMoves />} />
          <Route path='/my_moves' element={<MyMoves />} />

          <Route path='/my_profile' element={<MyProfile />} />
          <Route path='/get_quote' element={<GetQuote />} />
          <Route path='/log_out' element={<Logout />} />
        </Routes>


      </div>
    </div>

  );
};

export default SideNav;