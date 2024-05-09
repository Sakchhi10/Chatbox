import { useAuth } from "../Authcontext/AuthContext";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
import Sidebar from "../scenes/global/Sidebar";
import { CssBaseline, ThemeProvider, Card, IconButton, } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import DashboardAdmin from "../scenes/admindashboard/dashboard";
import OrderList from "../scenes/admindashboard/Order";
import MyProfile from "../scenes/admindashboard/user/Profile";
import Leads from "../scenes/admindashboard/leads/Leads";
import SignInSide from "../user/login";
import Message from "../scenes/admindashboard/message/Message";
import SignUp from "../user/Signup";
import Automation from "../scenes/admindashboard/automation/Automation";
import Campaign from "../scenes/admindashboard/campaign/Campaign";
import {
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Routers = () => {
  const { user } = useAuth();
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {user === null ? (
          <Routes>
            <Route path="/Login" element={<SignInSide />} />
            <Route
              path="/*"
              element={user === null ? <SignInSide /> : <Navigate to="/" />}
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        ) : (
          <div className="app">
            <Card
              sx={{
                flexBasis: '${cardWidth}px',
                flexShrink: 0,
                marginRight: 2,
                display: 'flex',
                flexDirection: 'column',
                transition: 'flex-basis 0.3s ease',

              }}
            >
              <Sidebar
                isSidebar={isSidebar}
                isSidebarCollapsed={isSidebarCollapsed}
                setSelected={setSelected}
              />
            </Card>
              {/* <IconButton
                onClick={toggleSidebar}
                style={{ color: "#4942E4", fontSize: "2.5rem", marginLeft: "auto" }}
              >
                {isSidebarCollapsed ? <MenuOutlined /> : <IoIosArrowDropleftCircle />}
              </IconButton> */}
            <main className="content" >
              <Topbar
                setIsSidebar={setIsSidebar}
                isSidebarCollapsed={isSidebarCollapsed}
                selected={selected}
                toggleSidebar={toggleSidebar}
                style={{ width: "100%" }}
              />
              <div className="page-top">
                <Routes>
                  {/* <Route path="/Login" element={<Login />} /> */}
                  {/* <Route
                    path="/login"
                    element={
                      user === null ? <SignInSide /> : <Navigate to="/" />
                    }
                  /> */}
                  <Route path="/" element={<DashboardAdmin />} />
                  <Route path="/order" element={<OrderList />} />
                  <Route path="/profile" element={<MyProfile />} />
                  <Route path="/leads" element={<Leads />} />
                  <Route path="/message" element={<Message />} />
                  <Route path="/automation" element={<Automation />} />
                  <Route path="/campaigns" element={<Campaign />} />
                </Routes>
              </div>
            </main>
          </div>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Routers;
