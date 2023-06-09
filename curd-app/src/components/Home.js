import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import List from "./List";
import axios from 'axios';
import {useState} from 'react';

function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  const students = {
    stuname: name,
    email: email
  }

  async function hendleSubmit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:5000/students", students)
      setStatus(true);
    }
    catch(err){
      console.log(err)
    }
  };

  if(status===true){
    return <Home/>
  }

  return (
    <>
      <Box textAlign="center" className="box" p={2} mb={2}>
        <Typography variant="h2">React CURD with API Call</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item md = {6} xs={12}>
            <Box textAlign="center" p={2} className="addStudent" mb={2}>
                <Typography variant="h4">Add Student</Typography>
            </Box>
            <form noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField onChange ={(e)=> setName(e.target.value)} name="stuname" variant="outlined" required fullWidth id="stuname" label="Name"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange= {(e)=>setEmail(e.target.value)} name="email" variant="outlined" required fullWidth id="email" label="Email Address" ></TextField>
                    </Grid>
                </Grid>
                <Box m={3}>
                    <Button onClick={e=> hendleSubmit(e)} type="submit" variant="contained" color="primary" fullWidth>Add</Button>
                </Box>
            </form>
        </Grid>

        <Grid item md = {6} xs={12}>
            <List/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
