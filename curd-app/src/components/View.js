import { Typography,Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from "axios";

function View() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState([]);
    
    useEffect(()=> {
        async function getStudent() {
            try{
                let student = await axios.get(`http://localhost:5000/students/${id}`);
                setStudent(student.data) 
            } 
            catch(err) {
                console.log(err)
            }
        };
        getStudent()
    }, [id])

    

  return (
    <>
      <Box textAlign="center" p={2} className="studentList" mb={2}>
                <Typography variant="h4">Student Deatil</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor: "#616161", margin: "20px"}}>
                            <TableCell align="center" className="tableHadCell">ID</TableCell>
                            <TableCell align="center" className="tableHadCell">Name</TableCell>
                            <TableCell align="center" className="tableHadCell">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{id}</TableCell>
                            <TableCell align="center">{student.stuname}</TableCell>
                            <TableCell align="center">{student.email}</TableCell>
        
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Box m={3} textAlign="center">
                <Button onClick={()=>navigate("/")} variant="contained" color="primary">Back to Home</Button>
            </Box>
    </>
  )
}

export default View
