import * as React from "react";
import {
  Grid,
  Typography,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  Container,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const rows = [
  {
    id: "1",
    Invoice: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Refunded",
    Customer: {
      initial: "O",
      name: "Olivia Ryhe",
      email: "olivia@email.com",
    },
  },
  {
    id: "2",
    Invoice: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Refunded",
    Customer: {
      initial: "O",
      name: "Olivia Ryhe",
      email: "olivia@email.com",
    },
  },
  {
    id: "3",
    Invoice: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Refunded",
    Customer: {
      initial: "O",
      name: "Olivia Ryhe",
      email: "olivia@email.com",
    },
  },
  {
    id: "4",
    Invoice: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Paid",
    Customer: {
      initial: "O",
      name: "Olivia Ryhe",
      email: "olivia@email.com",
    },
  },
  {
    id: "5",
    Invoice: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Refunded",
    Customer: {
      initial: "O",
      name: "Olivia Ryhe",
      email: "olivia@email.com",
    },
  },

  {
    id: "6",
    Invoice: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Refunded",
    Customer: {
      initial: "O",
      name: "Olivia Ryhe",
      email: "olivia@email.com",
    },
  },
  // Add more unique rows as needed
];

export default function OrderList() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [filters, setFilters] = React.useState({
    label: "",
    status: "",
    category: "",
    customer: "",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  // const filteredRows = rows.filter((row) => {
  //   return (
  //     row.Invoice.toLowerCase().includes(filters.label.toLowerCase()) &&
  //     (filters.status === "" ||
  //       row.Status.toLowerCase() === filters.status.toLowerCase()) &&
  //     (filters.category === "" ||
  //       filters.category === "All" ||
  //       row.Category.toLowerCase() === filters.category.toLowerCase()) &&
  //     (filters.customer === "" ||
  //       filters.customer === "All" ||
  //       row.Customer.toLowerCase() === filters.customer.toLowerCase())
  //   );
  // });

  const handleSearchChange = (e) => {
    handleFilterChange("label", e.target.value);
  };
  const handleStatusChange = (event) => {
    handleFilterChange("Status", event.target.value);
  };

  // ===============pagination==========================

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
    <>
      <Container sx={{ height: 400, width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item md={6} my={2}>
            <Typography variant="h3" fontWeight="bold">
              Order
            </Typography>
          </Grid>
          <Grid item md={6} my={2} align="end">
            <Button variant="contained">Download PDF</Button>
          </Grid>

          <Grid item md={6} my={1}>
            <InputLabel htmlFor="outlined-basic" shrink>
              <Typography variant="h5" fontWeight="bold">
                Label Name
              </Typography>
            </InputLabel>
            <TextField
              id="outlined-basic"
              placeholder="Search"
              variant="outlined"
              fullWidth
              size="small"
              value={filters.label}
              onChange={handleSearchChange}
            />
          </Grid>

          <Grid item md={2} my={1}>
            <InputLabel htmlFor="outlined-basic" shrink>
              <Typography variant="h5" fontWeight="bold">
                Status
              </Typography>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters.status}
              onChange={handleStatusChange}
              fullWidth
              size="small"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Filter By Status
              </MenuItem>
              <MenuItem value={"Paid"}>Paid</MenuItem>
              <MenuItem value={"Pending"}>Pending</MenuItem>
              <MenuItem value={"Refunded"}>Refunded</MenuItem>
              <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
            </Select>
          </Grid>

          <Grid item md={2} my={1}>
            <InputLabel htmlFor="outlined-basic" shrink>
              <Typography variant="h5" fontWeight="bold">
                Category
              </Typography>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              fullWidth
              size="small"
              displayEmpty
            >
              <MenuItem value="" disabled>
                All
              </MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Refund"}>Refund</MenuItem>
              <MenuItem value={"Purchase"}>Purchase</MenuItem>
              <MenuItem value={"Debit"}>Debit</MenuItem>
            </Select>
          </Grid>

          <Grid item md={2} my={1}>
            <InputLabel htmlFor="outlined-basic" shrink>
              <Typography variant="h5" fontWeight="bold">
                Customer
              </Typography>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              fullWidth
              size="small"
              displayEmpty
            >
              <MenuItem value="" disabled>
                All
              </MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Refund"}>Refund</MenuItem>
              <MenuItem value={"Purchase"}>Purchase</MenuItem>
              <MenuItem value={"Debit"}>Debit</MenuItem>
            </Select>
          </Grid>

          <Grid item md={12} my={1}>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#e7e7e7" }}>
                    <TableCell>
                      <Typography variant="h5" fontWeight="bold">
                        Invoice
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h5" fontWeight="bold">
                        Date Created
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="h5" fontWeight="bold">
                        Customer
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography variant="h5" fontWeight="bold">
                        Status
                      </Typography>
                    </TableCell>

                    <TableCell>
                      
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Typography variant="h5" fontWeight="bold">
                            {row.Invoice}
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
                              color: "#000",
                              // backgroundColor: row.Status==="Active"?("#65B741"):row.Status==="Pending"?("#EF4040"):("#FB8B24"),
                              padding: "5px",
                              textAlign: "start",
                            }}
                          >
                            {row.Status}
                          </Typography>
                        </TableCell>

                        <TableCell>
                              <FaArrowRight  style={{fontSize:"40px",backgroundColor:"blue",padding:"10px",color:"#fff",borderRadius:"10px"}}/>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
