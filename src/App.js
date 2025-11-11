import React, { useState } from "react";
import "./App.css";
import {
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  Stack,
  Box,
  Button,
} from "@mui/material";
import SideBar from "./Components/SIdeBar";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#9785BA",
        light: "#AF9FCD",
        contrastText: "#fff",
      },
      secondary: {
        main: "#D7C7F4",
        light: "#fff",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "ubuntu,open-sans",
    },
  });

  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Hamburger Icon visible only on mobile */}
        <Button
          sx={{
            display: { xs: "inline", md: "none" },
            height: "30px",

            position: "fixed",
            top: 5,
            left: 5,
            zIndex: 1700,
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.light" },
            width: "40px", // reasonable width for icon
            minWidth: "auto", // removes MUI's default 64px min width
            padding: "0px",
            margin: "0px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon sx={{ width: "20px" }} />
        </Button>

        <Grid
                  sx={{
            display: "flex",
            justifyContent: "center",
            margin: 0,
            padding: 0,
            width: "100%",
          }}
          // sx={{ display: "flex", justifyContent: "center" }}
          container
          // spacing={5}

        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection:"column",

              justifyContent: "flex-start", 
              alignItems:"stretch", 
              position: { xs: "fixed", md: "relative" },
             
              padding: "0px",
              margin: "0px",
              height: "100vh",
              zIndex: { xs: 1200, md: 1 },
              bgcolor: "white",

              "@media (max-width:900px)": {
                left: 0,
                top: 0,
                width: "80%",
                transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 400ms ease",
              },
            }}
            // position={{ xs: "fixed", md: "relative" }}
            // height={"100vh"}
            // zIndex={{ xs: 9999, md: 1 }}
            boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}
            xs={0}
            md={3}
          >
            <SideBar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
          </Grid>

          <Grid bgcolor="secondary.main" item xs={12} md={9}>
            <Outlet context={{ chat: chat, setChat: setChat }} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
