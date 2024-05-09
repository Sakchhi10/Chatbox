import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Avatar,
  Container,
} from "@mui/material";
import { Send, Videocam, Message } from "@mui/icons-material";

const MessageBox = () => {
  return (
    <Container>
      <Grid
        container
        className="messanger p-4 bg-white h-screen overflow-hidden"
        sx={{ marginTop: "100px" }}
      >
        <Grid item xs={2} className="pt-3 bg-white border-r border-slate-100">
          <Paper elevation={0} className="search-box h-10 text-slate-300">
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              px={2}
              borderBottom={1}
              borderColor="grey.100"
            >
              <Grid item md={6}>
                <form className="flex justify-center items-center">
                  <Message sx={{ pr: 2 }} />
                  <TextField
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    variant="standard"
                    size="small"
                    sx={{ fontFamily: "light", outline: "none" }}
                  />
                </form>
              </Grid>

              <Grid item md={6}>
              <Button>
                <Message />
                <Message
                  sx={{ position: "absolute", top: -2, fontSize: "small" }}
                />
              </Button>
              </Grid>

              
            </Grid>
          </Paper>

          <div className="user-list overflow-y-auto h-screen bg-white">
            {/* User list items */}
            <div className="flex hover:bg-slate-100 transition px-5 py-3 hover:cursor-pointer">
              <div className="pr-4">
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                  width="50"
                />
              </div>
              <div>
                <Typography className="text-violet-500 tex-md">
                  Lupe Fiasco
                </Typography>
                <Typography className="text-sm text-gray-400 font-light overflow-hidden h-5">
                  I got two tickets to go see this awesome band called, Lorem
                  ipsum dollar !! Do you want to come ?
                </Typography>
              </div>
            </div>
            {/* Add more user list items as needed */}
          </div>
        </Grid>

        <Grid item xs={10}>
          <Paper elevation={0} className="bg-white user-info-header px-5 py-3">
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid container alignItems="center">
                <Avatar
                  src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
                  width="40"
                />
                <Typography className="text-gray-400 tex-md pl-4">
                  Lupe Fiasco
                </Typography>
              </Grid>
              <div>
                <Message sx={{ color: "violet.300" }} />
                <Videocam sx={{ color: "grey.200", ml: 3 }} />
                <Message sx={{ color: "grey.200", ml: 3 }} />
              </div>
            </Grid>
          </Paper>

          <div className="message-area mt-4 px-4">
            {/* Message area */}
            {/* Add your message components here */}
          </div>

          <Paper
            elevation={0}
            className="bg-gray-100 fixed bottom-0 w-full pl-4"
          >
            <TextField
              multiline
              className="w-full bg-gray-100 pt-3 h-12"
              placeholder="Write a message"
              variant="standard"
              sx={{ fontFamily: "light", outline: "none" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MessageBox;
