import { useState, useEffect } from 'react'
import { Popper, Button, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Avatar, Paper, ClickAwayListener} from '@mui/material'
import { FlutterDash, MoreHoriz, } from '@mui/icons-material'
import { menuData } from './constants'

const Sidebar = () => {
  const [selected, setSelected] = useState('')
  const [openProfile, setOpenProfile] = useState(false)
  const [user, setUser] = useState({})

  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('yeeterUser')))
  }, [])

  const handleClickAwayProfile = () => {
    setOpenProfile(false)
  }

  const handleClick =() => {
    setOpenProfile(prev => !prev)
  }

  const selectMenu = (props) => {
    setSelected(props)
  }

  const menuList = menuData.map(each => {
    
    return (
    <ListItem key={each.label} sx={{margin:"0px", padding:"0px"}}>
      <ListItemButton 
      sx={{'&:hover':{backgroundColor:"inherit"},
      margin:"0px", 
      padding:"0px"}} 
      onClick={()=>selectMenu(each.label)}
      key={each.label}
      disableRipple>      
        <Button 
        startIcon={each.icon}
        sx={{padding:"10px 25px", 
          backgroundColor:"white",
          borderRadius:"50px",
          fontSize: "20px",
          '&:hover':{backgroundColor:"#ddd"},
          fontWeight: (selected===each.label) && "800",
          textTransform: 'capitalize',
          color:"black"}}
        disableRipple>
          {each.label}
        </Button>
      </ListItemButton>
    </ListItem>
    )
  })


  return (
    <Box className="sidebar">
      <Box 
      width="284px"
      minHeight="100%"
      borderRight="solid 1px #eee"
      position="fixed"
      sx={{display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
        <List sx={{padding:"0px"}}>
          <ListItem disablePadding>
            <Button
            sx={{
              padding:"10px 0px",
              borderRadius:"80px"
            }}>
              <FlutterDash
              sx={{
                fontSize:"40px",
                color:"primary"
              }}></FlutterDash>
            </Button>
          </ListItem>
            {menuList}
          <ListItem width="inherit" sx={{padding:"0px"}}>
            <Button variant="contained"
            sx={{
              fontSize:"20px",
              borderRadius:"50px",
              width:"95%",
              textTransform:"capitalize",
              marginTop:"10px",
              padding:"10px 30px"
            }}>Yeet</Button>
          </ListItem>
        </List>
        <ListItem>
          <ClickAwayListener onClickAway={handleClickAwayProfile}>
            <Box>
              <ListItemButton id="profile"
              sx={{borderRadius:"50px",
              '&:hover':{backgroundColor:"#ddd"},
              '&:active':{backgroundColor:"#ccc"}}}
              onClick={handleClick}
              disableRipple>
                <Box 
                sx={{
                  display:"flex", 
                  justifyContent:"space-between", 
                  alignItems:"center"
                }}>
                  <Avatar src="https://picsum.photos/200/300" />
                  <ListItemText variant="contained"
                  primary={user.name} secondary={user.username} sx={{marginLeft:"5px"}}></ListItemText>
                  <ListItemIcon>
                    <MoreHoriz sx={{marginLeft:"70%"}}/>
                  </ListItemIcon>
                </Box>
              </ListItemButton>
              <Popper open={openProfile} anchorEl={document.getElementById("profile")}>
                <Paper>
                  <List>
                    <ListItemButton>
                      <ListItemText>Add an existing account</ListItemText>
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText>Log out {user.username}</ListItemText>
                    </ListItemButton>
                  </List>
                </Paper>
              </Popper>
            </Box>
          </ClickAwayListener>
        </ListItem>
      </Box>
    </Box>
  )
}

export default Sidebar