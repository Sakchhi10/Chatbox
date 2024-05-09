import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import Sidebar from "./global/Sidebar";
import Dashboard from "./dashboard";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import DashboardAdmin from "./admindashboard/dashboard";
import OrderList from "./admindashboard/Order";
import MyProfile from "./admindashboard/user/Profile";
import Leads from "./admindashboard/leads/Leads";


const Adminapp = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        
          <Sidebar
            isSidebar={isSidebar}
            isSidebarCollapsed={isSidebarCollapsed}
          />
          <main className="content">
            <Topbar
              setIsSidebar={setIsSidebar}
              isSidebarCollapsed={isSidebarCollapsed}
              toggleSidebar={toggleSidebar}
              style={{ width: "100%" }}
            />
            <div className="page-top">
              <Routes>
                {/* <Route path="/Login" element={<Login />} /> */}
                <Route path="/" element={<DashboardAdmin />} />
                <Route path="/order" element={<OrderList/>} />
                <Route path="/profile" element={<MyProfile/>} />
                <Route path="/leads" element={<Leads/>} />
               
                
              </Routes>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Adminapp;
