import { Routes, Route, Navigate} from "react-router-dom"
import { SideBar } from "../components/SideBar"
import { Page1, Page2, Dashboard, Page3 } from "../pages"

export const BoletinRoutes = () => {
  return (

    <>
    
        {/* <SideBar/> */}

        <div className="dashboard-content px-3 pt-4">
            <Routes>

                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/page1" element={<Page1/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="/page3" element={<Page3/>} />

                {/* Para cualquier otra ruta */}
                <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
        </div>
    
    </>


    )
}
