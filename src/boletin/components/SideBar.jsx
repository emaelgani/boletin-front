import { useRef } from "react";
import { FaStream, FaHome, FaBars, FaFileAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import './SideBar.css';


/*  <NavLink  className={({isActive}) => `text-decoration-none px-3 py-2 d-block ${isActive ? "active" : ""} `} to="#"> <FaHome/>  Dashboard </NavLink> </li>  */

export const SideBar = ({children}) => {

    const sidebarRef = useRef();

    const onCloseSideBar = () => {
        sidebarRef.current.className = 'sidebar';
    }

  return (

    <div className='main-container d-flex'>
        <div className='sidebar' ref={sidebarRef} id='side_nav'>
            <div className="header box px-2 pt-3 pb-4 d-flex justify-content-between">
                <h1 className='fs-4'> <span className='bg-white text-dark rounded shadow px-2 me-2'>BL</span>Boletín</h1>
                <button onClick={onCloseSideBar} className='btn d-md-none d-block btn close-btn px-1 py-0 text-white'> <FaStream/> </button>
            </div>

            <ul className="list-unstyled px-2">

                <li className="">  <NavLink  className={({isActive}) => `text-decoration-none px-3 py-2 d-block ${isActive ? "active" : ""} `} to="/dashboard"> <FaHome/>  Dashboard </NavLink> </li>
                <li className="">  <NavLink  className={({isActive}) =>  `text-decoration-none px-3 py-2 d-block ${isActive ? "active" : ""} `} to="/page1"> <FaFileAlt/>  Boletín para docentes </NavLink></li>
                <li className=""> <NavLink  className={({isActive}) => `text-decoration-none px-3 py-2 d-block  ${isActive ? "active" : ""} `} to="/page2"> <FaFileAlt/>  Boletín para padres </NavLink></li>
                <li className=""> <NavLink  className={({isActive}) => `text-decoration-none px-3 py-2 d-block  ${isActive ? "active" : ""} `} to="/page3"> <FaFileAlt/>  Boletín para alumnos </NavLink></li>
       
                
            </ul>
            <hr className="h-color mx-2"/>

            <ul className="list-unstyled px-2">
                <li className=""> <a href="#" className="text-decoration-none px-3 py-2 d-block"> <FaBars/>  Configuración </a></li>
                
            </ul>


        </div>
        <div className='content'>

        <Navbar sidebarRef= {sidebarRef} rutas = {children} />





        </div>
    
       
    </div>



    )
}
