import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import {ListItemButton, Table} from "@mui/material";
import {TableCell} from "@mui/material";
import {TableRow} from "@mui/material";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { green } from "@mui/material/colors";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Button } from "@mui/joy";
export default function CardVariants() {
  const location = useLocation();
  const data = location.state;
  const keys = Object.keys(data); // Get keys of the data object
  
  return (
    <>
    <Link to="/">
      <Button sx={{backgroundColor:'limegreen',
      '&:hover':{
        backgroundColor:'lightgreen',
      }
      }}>
      <ArrowBackIcon/>
      </Button>
      
      
      
      </Link>
    <Box
      sx={{
        width: "100%",
        display: "grid",
        height: "100vh",
      }}
    >
      <Card variant="soft" >
        <CardContent>
          <Table aria-label="basic table">
            {keys.map((key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  <b>{key}</b>
                </TableCell>
                <TableCell>{data[key]}</TableCell>
              </TableRow>
            ))}
          </Table>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}
