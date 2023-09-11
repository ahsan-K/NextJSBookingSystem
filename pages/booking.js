import { useEffect, useState } from "react";
import { post } from "../utils/servicehandler";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function () {
  const bookNow = async (fields) => {
    const response = await post("/api/booking/bookNow", fields);
    console.log(response);
  };

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get("booking_name") &&
      data.get("user_name") &&
      data.get("contact") &&
      data.get("date") &&
      data.get("time")
    ) {
      bookNow({
        booking_name: data.get("booking_name"),
        user_name: data.get("user_name"),
        contact: data.get("contact"),
        time: data.get("time"),
        date: data.get("date"),
        comment: data.get("comment"),
      });
    } else {
      alert("Please fill required fields!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 6,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Booking
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="booking-name"
                  name="booking_name"
                  required
                  fullWidth
                  id="booking_name"
                  label="Booking Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="user_name"
                  label="User Name"
                  name="user_name"
                  autoComplete="user-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contact"
                  label="Contact"
                  type="number"
                  id="contact"
                  autoComplete="contact"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="date"
                  type="date"
                  id="date"
                  autoComplete="date"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="time"
                  type="time"
                  id="time"
                  autoComplete="time"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="comment"
                  label="Comment"
                  id="comment"
                  autoComplete="comment"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </form>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
