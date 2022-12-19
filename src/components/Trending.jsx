
import { useState} from 'react'
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Typography } from '@mui/material'
import { MoreHoriz, SentimentDissatisfiedOutlined } from '@mui/icons-material'

const Trending = (props) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <ListItem 
      sx={{position:"relative",
      padding:"0px"
    }}>
      <ListItemButton 
        sx={{display:"flex", 
        flexDirection:"column", 
        alignItems:'initial'
      }}>
        <Typography sx={{ fontSize:"13px", color:"#555"}}>Trending</Typography>
        <Typography sx={{ fontSize:"15px", fontWeight:"bold"}}>{props.tag}</Typography>
        <Typography sx={{ fontSize:"13px", color:"#555"}}>{props.Yeets} Yeets</Typography>
      </ListItemButton>
      <IconButton onClick={handleOpen} id={props.tag} sx={{position:"absolute", right:"15px", top:"15px"}}>
        <MoreHoriz></MoreHoriz>
      </IconButton>
      <Popover
            open={open}
            anchorEl={document.getElementById(props.tag)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List>
              <ListItemButton >
                <ListItemIcon>
                  <SentimentDissatisfiedOutlined/>
                </ListItemIcon>
                <ListItemText>
                  Not interested in this
                </ListItemText>
              </ListItemButton>
              <ListItemButton >
                <ListItemIcon>
                <SentimentDissatisfiedOutlined/>
                </ListItemIcon>
                <ListItemText>
                  This trend is harmful and spammy
                </ListItemText>
              </ListItemButton>
            </List>
          </Popover>
    </ListItem> 
  )
}

export default Trending