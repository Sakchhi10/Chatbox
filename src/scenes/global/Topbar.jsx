import React, { useContext } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  useTheme,
  TextField,
  InputAdornment,
  Button,
  MenuItem,
  Menu,
  Typography,
  ButtonGroup,
  Avatar,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MenuOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import {
  IoIosArrowDropleftCircle,
  IoIosNotificationsOutline,
} from "react-icons/io";

const Topbar = ({ isSidebarCollapsed, toggleSidebar, selected }) => {
  const userdat = JSON.parse(localStorage.getItem("LoginDetails")) || [];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.reload(navigate("/login"));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleColorMode = () => {
    // Assuming colorMode is part of your component's state or context
    colorMode.toggleColorMode();
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ backgroundColor: "#fff", padding: "10px 15px" }}
      color="black"
    >

      {/* <IconButton
        onClick={toggleSidebar}
        style={{ color: "#4942E4", fontSize: "2.5rem" }}
      >
        {isSidebarCollapsed ? <MenuOutlined /> : <IoIosArrowDropleftCircle />}
      </IconButton> */}
      <Container display="flex" alignItems="center" borderRadius="3px">
        
        <Grid container spacing={2} alignItems="center">
          <Grid item md={4}>
             {/* Display the selected title in the Topbar */}
             <Typography variant="h2" fontWeight="bold">
              {selected}
            </Typography>
          </Grid>

          <Grid item md={8} container justifyContent="flex-end">
            {/* <Dropdown>
              <Dropdown.Toggle className="btn text-white baccolor" id="dropdown-basic">
                <PersonOutlinedIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link to="/Profile">
                  <Dropdown.Item href="/Profile">
                    <PersonOutlinedIcon /> My Profile
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item onClick={logout}>
                  <BsArrowRightSquare /> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

           

            <Grid item md={4} align="end">
              <TextField
                variant="outlined"
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                // style={{ marginLeft: "10px", width: "100%" }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton style={{ color: "black" }}>
                        <SearchOutlined />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={4} align="end">
              <ButtonGroup
                variant="outlined"
                aria-label="outlined primary button group"
              >
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined} sx={{ border: "none" }}
                >
                  <IoIosNotificationsOutline
                    style={{
                      fontSize: "35px",
                      border: "1px solid #B6BBC4",
                      borderRadius: "8px",
                    }}
                  />
                </Button>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick} sx={{ border: "1px solid #e1e1e1", borderRadius: "20px" }}
                >
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </Button>

                <Button
                  id=""
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick} sx={{ border: "1px solid #e1e1e1", borderRadius: "20px" }}

                >
                  <IoSettingsOutline style={{
                    fontSize: "25px",
                    borderRadius: "8px",
                  }} />
                </Button>
              </ButtonGroup>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>
                  <Link to="/Profile">Profile</Link>
                </MenuItem>

                <MenuItem onClick={logout}>Logout</MenuItem>

                <MenuItem>
                  <IconButton
                    style={{ color: "black" }}
                    onClick={handleToggleColorMode}
                  >
                    {theme.palette.mode === "dark" ? (
                      <DarkModeOutlinedIcon />
                    ) : (
                      <LightModeOutlinedIcon />
                    )}
                  </IconButton>
                </MenuItem>

                <MenuItem>
                  <IconButton style={{ color: "black" }}>
                    <SettingsOutlinedIcon />
                  </IconButton>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* <Box display="flex" alignItems="center">
       
      </Box> */}
    </Box>
  );
};

export default Topbar;
