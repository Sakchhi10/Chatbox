import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import FlowChart from "./Chart";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Automation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Typography variant="h2" fontWeight="bold" my={2} mx={2}>
        Automation
      </Typography> */}
      <Container
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "auto",
        }}
      >
      
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" ,border:"2px solid #e1e1e1", mt: 4,borderRadius:"10px",mx:2,
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
                    marginLeft:"4px"
                  },
                }}
        >
          <Tab label="Instagram Outreach GPT 1" {...a11yProps(0)} sx={{ fontSize: "15px", fontWeight: "bold" }}/>
          <Tab label="Instagram Follower Export 1" {...a11yProps(1)} sx={{ fontSize: "15px", fontWeight: "bold" }}/>
          <Tab label="Facebook Outreach GPT 2" {...a11yProps(2)} sx={{ fontSize: "15px", fontWeight: "bold" }}/>
          <Tab label="Facebook Outreach GPT 1" {...a11yProps(3)} sx={{ fontSize: "15px", fontWeight: "bold" }}/>
          <Tab label="Instagram GPT Auto Message" {...a11yProps(4)} sx={{ fontSize: "15px", fontWeight: "bold" }}/>
        </Tabs>
        <TabPanel value={value} index={0}>
          <Container>
          <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
            <FlowChart/>
            </Grid>

          </Grid>
          </Container>
          
          
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Container>
    </>
  );
}
