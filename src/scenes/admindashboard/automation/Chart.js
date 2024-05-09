import React from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  CardContent,
  Card,
  CardHeader,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const VerticalFlowChart = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Card sx={{ maxWidth: 345 }}>
             
                <CardHeader title={<Typography variant="h4" fontWeight={"bold"}>Instagram Outreach GPT 1</Typography> }
                subheader="Last Edit:2020" align="center" sx={{backgroundColor:"#e1e1e1"}}/>

                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item md={12} align="center">
                      <Button
                        variant="outlined"
                        sx={{ border: "1px solid #525CEB" }}
                      >
                        <Typography variant="h6">Instagram Login</Typography>
                      </Button>

                      <Grid item md={6} align="center">
                        <ArrowDownwardIcon
                          style={{ fontSize: 30, color: "#525CEB" }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item md={12} align="center">
                      <Button
                        variant="outlined"
                        sx={{ border: "1px dotted #525CEB" }}
                      >
                        <Typography variant="h6">Instagram Login</Typography>
                      </Button>

                      <Grid item md={6} align="center">
                        <ArrowDownwardIcon
                          style={{ fontSize: 30, color: "#525CEB" }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item md={12} align="center">
                      <Button variant="outlined" >
                        <Typography variant="h6">Instagram Login</Typography>
                      </Button>

                      <Grid item md={6} align="center">
                        <ArrowDownwardIcon
                          style={{ fontSize: 30, color: "#525CEB" }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item md={12} align="center">
                      <Button variant="outlined" sx={{ border: "1px dotted #525CEB" }}>
                        <Typography variant="h6">Instagram Login</Typography>
                      </Button>

                      <Grid item md={6} align="center">
                        <ArrowDownwardIcon
                          style={{ fontSize: 30, color: "#525CEB" }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item md={12} align="center">
                      <Button variant="outlined">
                        <Typography variant="h6">Instagram Login</Typography>
                      </Button>

                      <Grid item md={6} align="center">
                        <ArrowDownwardIcon
                          style={{ fontSize: 30, color: "#525CEB" }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item md={12} align="center">
                      <Button
                        variant="outlined"
                        sx={{ border: "1px dotted #525CEB" }}
                      >
                        <Typography variant="h6">Instagram Login</Typography>
                      </Button>

                      <Grid item md={6} align="center">
                        <ArrowDownwardIcon
                          style={{ fontSize: 30, color: "#525CEB" }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item md={12} align="center">
                      <Button variant="outlined">
                        <Typography variant="h6">Instagram Login</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default VerticalFlowChart;
