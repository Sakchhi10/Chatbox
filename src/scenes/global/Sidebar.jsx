import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme, Avatar, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineInbox } from "react-icons/md";
import { TbTemplate } from "react-icons/tb";
import { HiCircleStack } from "react-icons/hi2";
import { AiFillProfile } from "react-icons/ai";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Item = ({ title, to, icon, selected, onItemSelected }) => {
  return (
    <MenuItem
      className={selected === title ? "active-menu-item" : ""}
      style={{
        borderRadius: "10px",
        backgroundColor: selected === title ? "#4942E4" : "transparent",
        color: selected === title ? "#fff" : "#fff",
        padding: "7px", // Adjust padding as needed
        marginBottom: "1.8px", // Adjust margin-bottom as needed
        overflow: "hidden",
    
      }}
      onClick={() => onItemSelected(title)}
      // icon={icon}
    >
       <div style={{ display: 'flex', alignItems: 'center' }}>
        {React.cloneElement(icon, {
          style: {
            ...icon.props.style,
            color: selected === title ? "#fff" : icon.props.style.color,
            marginRight: '8px', // Add margin between icon and text
          },
        })}
        <Typography
          variant="h5"
          style={{
            color: selected === title ? "#fff" : "#000",
          }}
        >
          {title}
        </Typography>
      </div>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ isSidebarCollapsed, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected,  onItemSelected] = useState("Dashboard"); // Changed the state variable name
  const sidebarClass = isSidebarCollapsed ? "sidebar collapsed" : "sidebar ";

  return (
    <div className={sidebarClass}>
      <ProSidebar
        collapsed={isSidebarCollapsed}
        sx={{
          "& .pro-sidebar-inner": {
            backgroundColor: "#fff",
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "#fff !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#E73D19 !important",
          },
          "& .pro-menu-item.active": {
            color: "black !important",
          },
        }}
      >
        {/* Your Sidebar content */}
        <Menu >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            className="mediaquty"
            style={{
              margin: "10px 0 20px 0",
              color: colors.primary[400],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                
              </Box>
            )}
          </MenuItem>

          <Box className="sidebarheight" >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Avatar
                alt="logo"
                src="/path/to/image.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Box>

            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.primary[400]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              ></Typography>
              <Typography variant="h5" color={colors.primary[400]}></Typography>
            </Box>
          </Box>

          <Container paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              onItemSelected={setSelected}
            />

            <Item
              title="Inbox"
              to="/inbox"
              icon={<MdOutlineInbox style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              onItemSelected={setSelected}
             
            />
            {/* <Item
              title="Order"
              to="/order"
              icon={<HomeOutlinedIcon style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              setSelected={setSelected}
            /> */}
            {/* <Item
              title="My Profile"
              to="/profile"
              icon={<AiFillProfile style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Item
              title="Leads"
              to="/leads"
              icon={<HiCircleStack style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              onItemSelected={setSelected}
            />
            <Item
              title="Templates"
              to="/templates"
              icon={<TbTemplate style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              onItemSelected={setSelected}
            />

            <Item
              title="Automation"
              to="/automation"
              icon={<AiFillProfile style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              onItemSelected={setSelected}
            />

            <Item
              title="Campaigns"
              to="/campaigns"
              icon={<IoIosArrowDropleftCircle style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              onItemSelected={setSelected}
            />

            {/* <Item
              title="Roles & Permission"
              to="/permission"
              icon={<HomeOutlinedIcon style={{color:"#000",fontSize:"23px"}}/>}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Container>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
