import React, { useState, useEffect } from "react";
import get from "../utils/servicehandler";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function () {
  const [data, setData] = useState([]);
  const getBookings = async (fields) => {
    const response = await get("/api/booking/getAllBookings");
    setData(response);
    console.log(response, " bookings");
  };

    useEffect(() => {
        getBookings()
        return ()=> setData([])
  }, []);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Booking Name</TableCell>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="right">User Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.booking_name}
                  </TableCell>
              <TableCell align="center">{row.user_name}</TableCell>
                  
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="right">{row.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
