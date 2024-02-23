import React from "react";
import { Box, CssBaseline } from "@mui/material";
import ApplicationBar from "../components/appbar";
import Chat from "../components/chat";

export default function Home() {
  return (
    <Box id="page" className="flex flex-col justify-center h-dvh">
      <ApplicationBar />
      <Chat />
    </Box>
  );
}
