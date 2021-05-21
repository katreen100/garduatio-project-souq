import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as CgIcons from "react-icons/cg";
import * as SiIcons from "react-icons/si";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import './dashboard.css';
import {IconContext} from 'react-icons' ;


export default function DashboardPage({ handleLogOut }) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  //'Customers', 'Products', 'Orders', 'Brands', 'Categories', 'LogOut'
  const sidebarData = [

    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiOutlineHome />,
      cname: 'nav-text',
    },

    {
      title: 'Customers',
      path: '/Customers',
      icon: <FiIcons.FiUsers />,
      cname: 'nav-text',
    },
    {
      title: 'Products',
      path: '/Products',
      icon: <RiIcons.RiProductHuntLine />,
      cname: 'nav-text',
    },
    {
      title: 'Orders',
      path: '/Orders',
      icon: <MdIcons.MdLocalShipping />,
      cname: 'nav-text',
    },
    {
      title: 'Categories',
      path: '/Categories',
      icon: <CgIcons.CgOptions />,
      cname: 'nav-text',
    },
    {
      title: 'Admins',
      path: '/Admins',
      icon: <RiIcons.RiAdminLine />,
      cname: 'nav-text',
    },
    {
      title: 'Brands',
      path: '/Brands',
      icon: <SiIcons.SiBrandfolder />,
      cname: 'nav-text',
    },


  ]
  return (
    <>
    <IconContext.Provider value={{color : "#fff"}}>
      <div className="navbar">
        <Link to="#" className="menu-bars" >
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-item' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" >
                <AiIcons.AiOutlineCloseCircle />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return(
                <li key={index} className={item.cname}>
                  <Link to={item.path} > {item.icon}  <span> {item.title} </span></Link>
                </li>
                
              )
            })}

            <li> <HiIcons.HiOutlineLogout /> 
             <Button variant="danger" onClick={handleLogOut}>Logout</Button>
             </li>
          </ul>
        </nav>
      </div>
      </IconContext.Provider>
    </>
  )

}