import React from "react";
import {
  Box,
  Divider,
  InputLabel,
  TextField,
  Typography,
  Tab,
  Grid,
  Select,
  MenuItem,
  Button,
  FormControl,
  TextareaAutosize,
  Container,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ImageUploadCard from "./Upload";
import { MdOutlineFormatBold, MdOutlineFormatItalic } from "react-icons/md";
import { CiTextAlignJustify } from "react-icons/ci";

export default function MyProfile() {
  const [value, setValue] = React.useState("1");
  const [age, setAge] = React.useState("");

  const handleChange1 = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Box sx={{ width: "100%", typography: "body1" }}>
          <Typography variant="h3" fontWeight="bold">
            My Profile
          </Typography>

          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 3,border:"2px solid #e1e1e1",borderRadius:"10px",mx:2,width:"50%" }}>
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
                    marginLeft:"4px"
                  },
                }}
              >
                <Tab
                  label="Settings"
                  value="1"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
                <Tab
                  label="Teams"
                  value="2"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
                <Tab
                  label="Plan"
                  value="3"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
                <Tab
                  label="Billing"
                  value="4"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                />
              </TabList>
            </Box>

            <TabPanel value="1">
              <>
                <Box sx={{ my: 2, justifyContent: "center" }}>
                  <Grid container justifyContent="center" spacing={2}>
                    <Grid
                      item
                      md={8}
                      sx={{
                        border: "1px solid #D8D9DA",
                        borderRadius: "8px",
                      }}
                    >
                      <Grid item md={12} xs={12}>
                        <Typography
                          variant="h3"
                          component="h1"
                          fontWeight="bold"
                          my={2}
                        >
                          Personal info
                        </Typography>
                        <Typography variant="subtitle1">
                          Customize how your profile information will appear to
                          the networks.
                        </Typography>
                        <hr />
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <Grid container spacing={2}>
                          <Grid item md={4} xs={12} align="center" mt={3}>
                            <ImageUploadCard />
                          </Grid>

                          <Grid item md={8} xs={12}>
                            <Container>
                              <Grid container spacing={2}>
                                <Grid item md={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Name
                                    </Typography>
                                  </InputLabel>

                                  <Grid container spacing={2}>
                                    <React.Fragment>
                                      <Grid item md={6} xs={12}>
                                        <TextField
                                          id="outlined-basic"
                                          placeholder="First Name"
                                          variant="outlined"
                                          fullWidth
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item md={6} xs={12}>
                                        <TextField
                                          id="outlined-basic"
                                          placeholder="Last Name"
                                          variant="outlined"
                                          fullWidth
                                          size="small"
                                        />
                                      </Grid>
                                    </React.Fragment>
                                  </Grid>
                                </Grid>

                                <Grid item md={6} xs={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Role
                                    </Typography>
                                  </InputLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="Enter Role"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                  />
                                </Grid>

                                <Grid item md={6} xs={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Email
                                    </Typography>
                                  </InputLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="Enter Email"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    type="email"
                                  />
                                </Grid>
                                <Grid item md={12} xs={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Country
                                    </Typography>
                                  </InputLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="Enter Email"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    type="text"
                                  />
                                </Grid>

                                <Grid item md={12} xs={12} my={1}>
                                  <InputLabel
                                    id="demo-simple-select-label"
                                    sx={{ fontWeight: "bold", color: "#000" }}
                                  >
                                    Timezone
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange1}
                                    fullWidth
                                    size="small"
                                    displayEmpty
                                  >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                  </Select>
                                </Grid>

                                <hr />

                                <Grid item md={12} my={1} align="end">
                                  <Button variant="outlined">Cancel</Button>
                                  {"   "}
                                  <Button variant="contained">Save</Button>
                                </Grid>
                              </Grid>
                            </Container>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="center" spacing={2} my={3}>
                    <Grid
                      item
                      md={8}
                      sx={{ border: "1px solid #D8D9DA", borderRadius: "8px" }}
                    >
                      <Grid item md={12} xs={12}>
                        <Typography variant="h5" fontWeight="bold" my={2}>
                          Bio
                        </Typography>
                        <Typography variant="subtitle1">
                          Write a short introduction to be displayed on your
                          profile
                        </Typography>
                        <hr />
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <Grid container spacing={2}>
                          <Grid item md={8} xs={12}>
                            <Grid container spacing={2}>
                              <Grid item md={4} my={1}>
                                <FormControl fullWidth>
                                  <InputLabel id="demo-simple-select-label">
                                    Code text
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange1}
                                    fullWidth
                                    size="small"
                                  >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                  </Select>
                                </FormControl>
                              </Grid>

                              <Grid item md={1} my={1}>
                                <MdOutlineFormatBold
                                  style={{ fontSize: "20px" }}
                                />
                              </Grid>

                              <Grid item md={1} my={1}>
                                <MdOutlineFormatItalic
                                  style={{ fontSize: "20px" }}
                                />
                              </Grid>

                              <Grid item md={1} my={1}>
                                <CiTextAlignJustify
                                  style={{ fontSize: "20px" }}
                                />
                              </Grid>

                              <Grid item md={6} my={1}></Grid>
                              <Grid item md={12} my={1}>
                                <TextareaAutosize
                                  id="outlined-basic"
                                  placeholder="Enter Country"
                                  minRows={4}
                                  style={{ width: "150%" }}
                                />
                              </Grid>
                              <hr />

                              <Grid item md={12} my={1} align="end">
                                <Button variant="outlined">Cancel</Button>
                                {"   "}
                                <Button variant="contained">Save</Button>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="center" spacing={2}>
                    <Grid
                      item
                      md={8}
                      sx={{ border: "1px solid #D8D9DA", borderRadius: "8px" }}
                    >
                      <Grid item md={12} xs={12}>
                        <Typography variant="h5" fontWeight="bold" my={2}>
                          Personal info
                        </Typography>
                        <Typography variant="subtitle1">
                          Customize how your profile information will appear to
                          the networks.
                        </Typography>
                        <hr />
                      </Grid>

                      <Grid item md={12} xs={12}>
                        <Grid container spacing={2}>
                          <Grid item md={4} xs={12}>
                            <ImageUploadCard />
                          </Grid>

                          <Grid item md={8} xs={12}>
                            <Container>
                              <Grid container spacing={2}>
                                <Grid item md={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Name
                                    </Typography>
                                  </InputLabel>

                                  <Grid container spacing={2}>
                                    <React.Fragment>
                                      <Grid item md={6} xs={12}>
                                        <TextField
                                          id="outlined-basic"
                                          placeholder="First Name"
                                          variant="outlined"
                                          fullWidth
                                          size="small"
                                        />
                                      </Grid>
                                      <Grid item md={6} xs={12}>
                                        <TextField
                                          id="outlined-basic"
                                          placeholder="Last Name"
                                          variant="outlined"
                                          fullWidth
                                          size="small"
                                        />
                                      </Grid>
                                    </React.Fragment>
                                  </Grid>
                                </Grid>

                                <Grid item md={6} xs={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Role
                                    </Typography>
                                  </InputLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="Enter Role"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                  />
                                </Grid>

                                <Grid item md={6} xs={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Email
                                    </Typography>
                                  </InputLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="Enter Email"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    type="email"
                                  />
                                </Grid>
                                <Grid item md={12} xs={12} my={1}>
                                  <InputLabel htmlFor="outlined-basic" shrink>
                                    <Typography
                                      variant="h5"
                                      sx={{ fontWeight: "bold", color: "#000" }}
                                    >
                                      Country
                                    </Typography>
                                  </InputLabel>
                                  <TextField
                                    id="outlined-basic"
                                    placeholder="Enter Email"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    type="text"
                                  />
                                </Grid>

                                <Grid item md={12} xs={12} my={1}>
                                  <InputLabel
                                    id="demo-simple-select-label"
                                    sx={{ fontWeight: "bold", color: "#000" }}
                                  >
                                    Timezone
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange1}
                                    fullWidth
                                    size="small"
                                    displayEmpty
                                  >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                  </Select>
                                </Grid>

                                <hr />

                                <Grid item md={12} my={1} align="end">
                                  <Button variant="outlined">Cancel</Button>
                                  {"   "}
                                  <Button variant="contained">Save</Button>
                                </Grid>
                              </Grid>
                            </Container>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
              </>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}
