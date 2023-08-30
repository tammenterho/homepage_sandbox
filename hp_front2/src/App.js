import React from "react";
import SimpleSlider from "./components/SlickCarousel";
import { Helmet } from "react-helmet";
import "./App.css";
import AboutUs from "./components/aboutUs";
import Header from "./components/header";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";

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
        <div className="logocont">
          <h2>More our clients</h2>
          <div className="logos">
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
            <img src={require("./images/company1.png")} alt="teknosolutions" />
            <img src={require("./images/company2.png")} alt="teknosolutions" />
            <img src={require("./images/company3.png")} alt="teknosolutions" />
            <img src={require("./images/company4.png")} alt="teknosolutions" />
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
            <img
              src={require("./images/Teknosolutions-logo.png")}
              alt="teknosolutions"
            />
          </div>
        </div>
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
    </div>
  );
}

export default App;
