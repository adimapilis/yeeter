import { useState } from 'react'
import { Box, Button, Container, Link, Modal, Typography } from '@mui/material'
import { fillerPic } from '../components/constants'
import { FlutterDash } from '@mui/icons-material'
import { LoginModal, SignupModal } from '../components'

const Home = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [accounts, setAccounts] = useState([])
  const [logged, setLogged] = useState(false)

  const handleOpenSignup = () => setSignup(true);
  const handleOpenLogin = () => setLogin(true);
  const handleCloseSignup = () => setSignup(false);
  const handleCloseLogin = () => setLogin(false);
  const handleSignup = (form) => {
    setAccounts(prev => [...prev, form])
  }

  const handleLogin = (user) => {
    const verify = accounts.find(each => {
      if ((user.username===each.username) && (user.password===each.password)) {
        setLogged(true)
        localStorage.setItem("yeeterUser", JSON.stringify(each));
        return true
      }
      return false
    })
    !verify && alert("Invalid username or password")
  }
  
  return (
    <Box className="home" sx={{width:"100%", display:"flex"}}>
      <Box component="img" src="./Twitterbackground.png" alt="loginpic" className="login-pic" sx={{width: "50%", height: "100vh"}}/>
      <Box sx={{minWidth:"378px",width: "50%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <FlutterDash sx={{fontSize:"50px", color:"blue", paddingBottom:"60px"}}/>
        <Typography variant="h3" sx={{paddingBottom: "70px", fontWeight:"bold"}}>Happening now</Typography>
        <Typography variant="h4" sx={{paddingBottom:"45px", fontWeight:"bold"}}>Join Yeeter today.</Typography>
        <Box width="300px"> 
          <Button variant="contained" onClick={handleOpenSignup} sx={{width:"100%", borderRadius:"20px", marginBottom:"10px"}}>Sign up with phone or email</Button>
          <Typography sx={{fontSize:"12px", paddingBottom:"80px"}}>By signing up, you agree to the <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>, including <Link>Cookie Use.</Link></Typography>
          <Typography variant="h5" sx={{fontWeight:"bold", paddingBottom:"30px"}}>Already have an account?</Typography>
          <Button variant="outlined" onClick={handleOpenLogin} sx={{borderRadius:"20px", width:"100%"}}>Sign In</Button>
        </Box>
        <Modal
          open={signup}
          onClose={handleCloseSignup}
          aria-labelledby="modal-signup-title"
          aria-describedby="modal-signup-description"
        >
          <SignupModal handleSignup={handleSignup} handleCloseSignup={handleCloseSignup}/>
        </Modal>
        <Modal
          open={login}
          onClose={handleCloseLogin}
          aria-labelledby="modal-login-title"
          aria-describedby="modal-login-description"
        >
          <LoginModal handleCloseLogin={handleCloseLogin} handleOpenSignup={handleOpenSignup} handleLogin={handleLogin} logged={logged}/>
        </Modal>
      </Box>
    </Box>
  )
}

export default Home