import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, Notifications } from "@mui/icons-material";
import { Avatar, Container, Stack } from "@mui/material";

export default function ApplicationBar() {
  return (
    <AppBar position="static" className="bg-[#114B93] ">
      <Toolbar className="flex justify-between">
        <Stack direction="row" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Avatar
            src=""
            alt="LOGO"
            sx={{ width: 64, height: 48 }}
            variant="square"
          /> */}
        </Stack>
        <Typography variant="h6" component="span">
          RH ONLINE
        </Typography>
        <div>
          <Notifications className="mx-2" />
          <AccountCircle className="mx-2" />
        </div>
      </Toolbar>
    </AppBar>
  );
}
