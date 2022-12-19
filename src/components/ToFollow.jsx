import { useState} from 'react'
import { Avatar, Box, Button, ListItem, ListItemAvatar, ListItemButton, Typography } from '@mui/material'

const ToFollow = (props) => {
  const [followed, setFollowed] = useState(false)

  const handleClick = () => {
    setFollowed(prev => !prev)
  }
  return (
    <ListItem 
      sx={{position:"relative",
      padding:"0px"
      }}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar src={props.img}/>
        </ListItemAvatar>
        <Box sx={{display:"flex", 
          flexDirection:"column", 
          alignItems:'initial'}}>
          <Typography sx={{ fontSize:"15px", fontWeight:"bold"}}>{props.name}</Typography>
          <Typography sx={{ fontSize:"13px", color:"#555"}}>{props.username} </Typography>
          </Box>
      </ListItemButton>
      <Button variant="contained" onClick={handleClick}
        sx={{position:"absolute", 
        right:"15px", 
        top:"15px", 
        backgroundColor:"black", 
        textTransform:"capitalize", 
        fontSize:"15px",
        borderRadius:"40px",
        padding:"3px 20px"}}>
        {(followed ?  `Following` : `Follow`)}
      </Button>
    </ListItem> 
  )
}

export default ToFollow