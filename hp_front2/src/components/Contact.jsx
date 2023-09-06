import { Button, Grid, TextField } from "@mui/material";

export function Contact() {
  return (
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
      </div>
    </div>
  );
}
