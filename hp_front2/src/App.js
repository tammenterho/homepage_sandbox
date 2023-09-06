import React from "react";
import SimpleSlider from "./components/SlickCarousel";
import { Helmet } from "react-helmet";
import "./App.css";
import AboutUs from "./components/aboutUs";
import Header from "./components/header";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import MoreClients from "./components/moreClients";
import { Comments } from "./components/Comments.jsx";

function App() {
  return (
    <div className="whole">
      <div className="App">
        <Helmet>
          <title>My App</title>
          <link rel="stylesheet" href="https://use.typekit.net/sdb5sez.css" />
          <meta name="description" content="My app description" />
        </Helmet>
        <Header />
      </div>
      <div className="materials">
        <SimpleSlider />
        <MoreClients></MoreClients>
        <AboutUs />
        <div className="contact" id="contact">
          <h2>Contact</h2>
          <div className="contact-input">
            <Grid container direction={"column"} spacing={5}>
              <Grid item>
                <TextField
                  className="textfield"
                  required
                  id="outlined-text"
                  label="First name"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  required
                  id="outlined-text"
                  label="Last name"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  sx={{
                    width: 500,
                  }}
                  id="outlined-text"
                  label="E-mail"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  sx={{
                    width: 500,
                  }}
                  id="outlined-multiline-flexible"
                  label="Message"
                  multiline
                  maxRows={4}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{
                width: 500,
              }}
            >
              SEND
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default App;
