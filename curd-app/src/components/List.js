import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function List() {
  let url = "http://localhost:5000/students";
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function getAllStudents() {
        try {
          const students = await axios.get(url);
          setStudent(students.data);
        } catch (err) {
          console.log(err);
        }
      };
    
    getAllStudents();
  }, [url]);

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/students/${id}`)
    var newStudents = student.filter((item) => {
      return item.id !== id ;
    });
    setStudent(newStudents)
  }

  
  return (
    <>
      <Box textAlign="center" p={2} className="studentList" mb={2}>
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161", margin: "20px" }}>
              <TableCell align="center" className="tableHadCell">
                No
              </TableCell>
              <TableCell align="center" className="tableHadCell">
                Name
              </TableCell>
              <TableCell align="center" className="tableHadCell">
                Email
              </TableCell>
              <TableCell align="center" className="tableHadCell">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((student, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i+1}</TableCell>
                  <TableCell align="center">{student.stuname}</TableCell>
                  <TableCell align="center">{student.email}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <Link to={`/view/${student.id}`}>
                          <RemoveRedEyeIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <Link to={`/edit/${student.id}`}>
                          <EditIcon />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={()=>handleDelete(student.id)}>
                          <DeleteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default List;
