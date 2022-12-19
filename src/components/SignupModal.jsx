import { ArrowBack, Close } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, IconButton, TextField, Typography } from '@mui/material'
import { useState } from 'react'



const SignupModal = (props) => {
  const [email, setEmail] = useState(true)
  const [activeStep, setActiveStep] = useState(1)
  const [form, setForm] = useState({name:"", contact:"", dob:"", username:"", password:"", address:""})
  const [agree, setAgree] = useState(false)
  const changetoEmail = () => {
    setEmail(prev=>!prev)
  }

  const nextStep = () => {
    if (activeStep<3) {
      setActiveStep(prev => prev + 1)
    }
  }

  const stepBack = () => {
    setActiveStep(prev => prev -1)
  }
  
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
      height:"max(80%, 600px)",
      display:"flex",
      flexDirection:"column"
    }}>
      <Box sx={{display:"flex"}}>
        <IconButton sx={{height:"30px", width:"30px"}}>
          {activeStep < 2 ? <Close onClick={props.handleCloseSignup}/> :<ArrowBack onClick={stepBack}/>}
        </IconButton>
        <Typography variant="h5" sx={{marginBottom:"40px", marginLeft:"20px"}}>Step {activeStep} of 3</Typography>
      </Box>
      <Container variant="form" sx={{display:"flex", flexDirection:"column", marginRight:"30px"}}> 
        <Box sx={{display: activeStep !== 1 ? "none" : "flex", flexDirection:"column"}}>
          <Typography variant="h3" sx={{fontWeight:"bold", marginBottom:"30px"}}>Create your account</Typography>
          <TextField onChange={handleChange} required value={form.name} id="name" label="Name" variant="outlined" sx={{marginBottom:"20px"}}></TextField>
          <TextField onChange={handleChange} required value={form.contact}   id="contact" type={email? "email" : "number"} label={email ? "Email" : "Phone"} variant="outlined" sx={{marginBottom:"10px"}}></TextField>
          <Button variant="text" onClick={changetoEmail}>Use {(!email) ? " mail" : "Phone"} Instead</Button>
          <Typography variant="h5">Date of Birth</Typography>
          <TextField onChange={handleChange} required v={form.dob} id="dob" type="date" variant="outlined" sx={{marginBottom:"20px"}}></TextField>
        </Box>

        <Box sx={{display: activeStep !== 2 ? "none" : "flex", flexDirection:"column"}}>
          <Typography variant="h3" sx={{fontWeight:"bold", marginBottom:"30px"}}>Create your account</Typography>
          <TextField required onChange={handleChange} value={form.username} id="username" label="Username" variant="outlined" sx={{marginBottom:"20px"}}></TextField>
          <TextField required onChange={handleChange} value={form.password} id="password" type="password" label="Password" variant="outlined" sx={{marginBottom:"20px"}}></TextField>
          <TextField required onChange={handleChange} value={form.address} id="address" label="Address" variant="outlined" sx={{marginBottom:"78px"}}></TextField>
        </Box>

        <Container sx={{justifyContent:"left", display: activeStep !== 3 ? "none" : "flex", flexDirection:"column"}}>
          <Typography variant="h4" sx={{marginBottom: "30px", fontSize:"max(35px,3.3vw)"}}>Customize your experience</Typography>
          <Typography variant="h5" sx={{marginBottom: "30px",fontSize:"max(1.8vw,20px)"}}> Track where you see Yeeter content across the web</Typography>
          <Container sx={{display:"flex",width:"100%", alignItems:"initial", marginBottom:"20px"}}>
            <Checkbox value={agree} onClick={()=>setAgree(prev=>!prev)}
              sx={{height:"20px", width: "30px", marginTop:"5px"}}
            />
          <Typography sx={{fontSize:"max(1.3vw,12px)"}}>By signing up, you agree to our Terms, Privacy Policy, and Cookie Use. Yeeter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. Learn more</Typography>  
        </Container>
      </Container>



        {activeStep!==3? <Button variant="contained" onClick={nextStep}>Next</Button> :
           <Button onClick={()=>{props.handleSignup(form); props.handleCloseSignup()}} disabled={!agree && true} type="submit" variant="contained">Create Account</Button>}
      </Container>
    </Container>
  )
}

export default SignupModal