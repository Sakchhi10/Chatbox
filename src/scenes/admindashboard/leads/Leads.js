// material-ui
import {
  Grid,
  Typography,
  Box,
  Container,
  Checkbox,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TablePagination,
  Avatar,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const rows = [
  {
    id: "1",
    Campaign: "Insta Scrape List 23",
    Date: "Feb 3, 2023",
    Status: "Active",
    Social: "Instagram",
    Message: "200",
  },
  {
    id: "2",
    Campaign: "Insta Scrape List 23",
    Date: "Feb 3, 2023",
    Status: "Pending",
    Social: "Instagram",
    Message: "200",
  },
  {
    id: "3",
    Campaign: "Insta Scrape List 23",
    Date: "Feb 3, 2023",
    Status: "Inactive",
    Social: "Instagram",
    Message: "200",
  },
  {
    id: "4",
    Campaign: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Active",
    Social: "Facebook",
    Message: "201",
  },
  {
    id: "5",
    Campaign: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Active",
    Social: "LinkedIn",
    Message: "500",
  },

  {
    id: "6",
    Campaign: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Active",
    Social: "Facebook",
    Message: "500",
  },
];

const styles = {
  boldHeader: {
    fontWeight: "bold",
    color: "#000",
  },
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Leads = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const [selectionModel, setSelectionModel] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectionModelChange = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
  };

  const rowsPerPageOptions = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container sx={{ flex: 1, width: "100%", mt: 3 }}>
      <Box
        sx={{
          position: "sticky",
          top: { sm: -100, md: -110 },
          bgcolor: "background.body",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* <Typography variant="h2" fontWeight="bold">
            Leads
          </Typography> */}

          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                border: "2px solid #e1e1e1",
                mt: 4,
                borderRadius: "10px",
                mx: 2,
                width: "50%",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  "& .Mui-selected": {
                    backgroundColor: "#3559E0",
                    color: "#fff !important",
                    fontSize: "15px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  },
                  "& .MuiTab-root": {
                    marginBottom: "8px",
                    marginTop: "8px",
                    marginLeft: "4px",
                  },
                }}
              >
                <Tab
                  label="All Leads"
                  value="1"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
                <Tab
                  label="New"
                  value="2"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
                <Tab
                  label="Engaged"
                  value="3"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
                <Tab
                  label="Qualifed"
                  value="4"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
                <Tab
                  label="Lost"
                  value="5"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
              </TabList>
            </Box>

            <TabPanel value="1">
              <Grid item md={12} xs={12}>
                <Card sx={{ maxWidth: "100%" }}>
                  <CardContent>
                    {/* <CardHeader
                      title={
                        <Typography variant="h3" fontWeight="bold">
                          Leads
                        </Typography>
                      }
                    /> */}

                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow sx={{ backgroundColor: "#e7e7e7" }}>
                            <TableCell>
                              <Typography variant="h5" fontWeight="bold">
                                Picture
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h5" fontWeight="bold">
                                Name
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h5" fontWeight="bold">
                                User Name
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h5" fontWeight="bold">
                                Created At
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h5" fontWeight="bold">
                                Source
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="h5" fontWeight="bold">
                                Status
                              </Typography>
                            </TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell>
                                  <Typography variant="h5" fontWeight="bold">
                                    <Avatar
                                      alt={row.Campaign}
                                      src="/path/to/image.jpg"
                                    />
                                  </Typography>
                                </TableCell>

                                <TableCell>
                                  <Typography variant="h5" fontWeight="bold">
                                    {row.Campaign}
                                  </Typography>
                                </TableCell>

                                <TableCell>
                                  <Typography variant="h5" fontWeight="bold">
                                    {row.Social}
                                  </Typography>
                                </TableCell>

                                <TableCell>
                                  <Typography variant="h5" fontWeight="bold">
                                    {row.Date}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography variant="h5" fontWeight="bold">
                                    {row.Message}
                                  </Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    sx={{
                                      borderRadius: "10px",
                                      color:
                                        row.Status === "Active"
                                          ? "#1A5D1A"
                                          : row.Status === "Pending"
                                          ? "#FE0000"
                                          : "#750E21",
                                      backgroundColor:
                                        row.Status === "Active"
                                          ? "#C1F2B0"
                                          : row.Status === "Pending"
                                          ? "#E97777"
                                          : "#F7B787",
                                      padding: "10px",
                                      textAlign: "center",
                                    }}
                                  >
                                    {row.Status}
                                  </Typography>
                                </TableCell>

                                <TableCell>
                                <HiOutlineDotsHorizontal
                                    style={{
                                      fontSize: "40px",
                                      backgroundColor: "#e1e1e1",
                                      padding: "10px",
                                      color: "#000",
                                      borderRadius: "10px",
                                    }}
                                  />{"     "}
                                  <FaArrowRight
                                    style={{
                                      fontSize: "40px",
                                      backgroundColor: "blue",
                                      padding: "10px",
                                      color: "#fff",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>

                      <TablePagination
                        rowsPerPageOptions={rowsPerPageOptions}
                        component="h6"
                        variant="h2"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
};

export default Leads;
