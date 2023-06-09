import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();   
    const [student, setStudent] = useState({
      stuname: "",
      email: ""
    });

  useEffect(()=> {
    async function editStudent(){
      try{
        const  student = await axios.get(`http://localhost:5000/students/${id}`);
        setStudent(student.data)
      }
      catch(err){
        console.log(err)
      }
    };
    editStudent()
  }, [id]);

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    })
  };

  async function hendleSubmit(e){
    e.preventDefault();
    try{
      await axios.put(`http://localhost:5000/students/${id}`, student)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  };


  return (
    <>
      <Box textAlign="center" className="box" p={2} mb={2}>
        <Typography variant="h2">React CURD with API Call</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md = {6} xs={12}>
            <Box textAlign="center" p={2} className="addStudent" mb={2}>
                <Typography variant="h4">Edit Student's Details</Typography>
            </Box>
            <form >
                <Grid container spacing={2}>
                <Grid item xs={6}>
                        <TextField  name="stuname" variant="outlined" required fullWidth id="stuname" label="ID" value={id}></TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField name="stuname" variant="outlined" required fullWidth id="stuname" label="Name" value={student.stuname} onChange={e=>onTextFieldChange(e)}></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="email" variant="outlined" required fullWidth id="email" label="Email Address" value={student.email} onChange={e=>onTextFieldChange(e)}></TextField>
                    </Grid>
                </Grid>
                <Box m={3}>
                    <Button onClick={e=>hendleSubmit(e)} type="submit" variant="contained" color="primary" fullWidth>Update</Button>
                </Box>
            </form>
            <Box m={3} textAlign="center">
                <Button onClick={()=>navigate("/")} variant="contained" color="primary">Back To Home</Button>
            </Box>
        </Grid>

        
      </Grid>   
    </>
  )
}

export default Edit;
