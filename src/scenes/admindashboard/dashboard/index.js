import { useState } from "react";

// material-ui
import {
  Container,
  Grid,
  Typography,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,TablePagination
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { AiOutlineFullscreen } from "react-icons/ai";
import CardContent from "@mui/material/CardContent";
import { FaArrowRight } from "react-icons/fa";
import AnalyticEcommerce from "../../../components/cards/statistics/AnalyticEcommerce";




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
  {
    id: "7",
    Campaign: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Active",
    Social: "Facebook",
    Message: "500",
  },
  {
    id: "8",
    Campaign: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Active",
    Social: "Facebook",
    Message: "500",
  },
  {
    id: "9",
    Campaign: "INV-1230",
    Date: "Feb 3, 2023",
    Status: "Active",
    Social: "Facebook",
    Message: "500",
  },
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardAdmin = () => {
  // const [value, setValue] = useState('today');
  // const [slot, setSlot] = useState('week');

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
    <Container sx={{ mt: 5 }}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>

        <Grid item xs={12} sx={{ mb: -2.25 }}>
          {/* <Typography variant="h2" fontWeight="bold">
            Dashboard
          </Typography> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <AnalyticEcommerce
            title="Message Send"
            count="4,42,236"
            percentage={59.3}
            extra="35,000"
            color="success"
            
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <AnalyticEcommerce
            title="Successful Message"
            count="78,250"
            percentage={70.5}
            extra="8,900"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <AnalyticEcommerce
            title="Failed Message"
            count="18,800"
            percentage={27.4}
            isLoss
            extra="1,943"
            color="success"
          />
        </Grid>

        <Grid
          item
          md={8}
          sx={{ display: { sm: "none", md: "block", lg: "none" } }}
        />

        <Grid item md={12} xs={12}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardContent>
              <CardHeader
                title={
                  <Grid container spacing={2}>
                      <Grid item md={6}>
                        <Typography variant="h3" fontWeight="bold">
                          Campaign
                        </Typography>
                      </Grid>
                      <Grid item md={6}>
                        <Typography variant="h3" fontWeight="bold" align="end">
                          <AiOutlineFullscreen
                            style={{
                              fontSize: "2rem",
                              backgroundColor: "#e1e1e1",
                              borderRadius: "5px",
                            }}
                          />
                        </Typography>
                      </Grid>
                    </Grid>
                }
              />

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#e7e7e7" }}>
                      <TableCell>
                        <Typography variant="h5" fontWeight="bold">
                          Campaign Title
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" fontWeight="bold">
                          Date Created
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" fontWeight="bold">
                          Social Channel
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" fontWeight="bold">
                          Message Sent
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
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Typography variant="h5" fontWeight="bold">
                            {row.Campaign}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" fontWeight="bold">
                            {row.Date}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="h5" fontWeight="bold">
                            {row.Social}
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
                              color:row.Status==="Active"?("#1A5D1A"):row.Status==="Pending"?("#FE0000"):("#750E21"),
                              backgroundColor: row.Status==="Active"?("#C1F2B0"):row.Status==="Pending"?("#E97777"):("#F7B787"),
                              padding: "5px",textAlign:"center"
                            }}
                          >
                            {row.Status}
                          </Typography>
                        </TableCell>
                        <TableCell>
                              <FaArrowRight  style={{fontSize:"40px",backgroundColor:"#4942E4",padding:"10px",color:"#fff",borderRadius:"10px"}}/>
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
      </Grid>
    </Container>
  );
};

export default DashboardAdmin;
