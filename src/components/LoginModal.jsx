import { Close } from '@mui/icons-material';
import { Button, Typography, Container, IconButton, TextField } from '@mui/material';
import React from 'react'

const LoginModal = (props) => {
  const [form, setForm] = React.useState({username:"", password:""});
 
  const handleChange = (event) => {
    setForm (prev => {
      const {id, value} = event.target
      return {
        ...prev,
        [id]: value
      }
    })
  }

  return (
    <Container sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      border: "2px solid #000",
      p: "10px 10px 30px 10px",
      width:"clamp(300px, 80%, 600px)",
      height:"max(70%, 500px)",
      display:"flex",
    }}>
      <IconButton sx={{height:"30px", width:"30px"}}>
      <Close onClick={props.handleCloseLogin}/>
      </IconButton>
      <Container variant="form" sx={{display:"flex", flexDirection:"column"}}> 
        <Typography variant="h5" sx={{marginTop:"40px", marginBottom:"40px"}}>Sign in to your Account</Typography>
        <TextField required onChange={handleChange} value={form.username} id="username" label="Username" variant="outlined" sx={{marginBottom:"20px"}}></TextField>
        <TextField required onChange={handleChange} value={form.password} id="password" type="password" label="Password" variant="outlined" sx={{marginBottom:"20px"}}></TextField>
        <Button onClick={()=>props.handleLogin(form)} type="submit" variant="contained" sx={{marginBottom:"15px"}}>Sign in</Button>
        {props.logged && <Button variant="outlined" href="./Main" sx={{marginBottom:"40px"}}>Proceed to Yeeter</Button>} 
        <Typography variant="h6" sx={!props.logged && {marginTop:"76.5px"}}>Don't have an account?</Typography>
        <Button onClick={()=>{props.handleCloseLogin(); props.handleOpenSignup()}}  variant="text" >Create Account</Button>
      </Container>
    </Container>
  );
}

export default LoginModal