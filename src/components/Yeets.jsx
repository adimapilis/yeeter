import { useState } from 'react'
import { Popover, Stack, Avatar, Box, Card, CardMedia, IconButton, Typography, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorderOutlined, FileUploadOutlined, MoreHoriz, LoopOutlined } from '@mui/icons-material'
import { yeetPopperMenu } from './constants'
import { Comment } from "."



const Yeets = (props) => {
  const [open, setOpen] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [commentsShown, setCommentsShown] = useState(1)
  

  const handleFavorite= () => {
    setFavorite(prev => !prev)
  }
  const handleClose = () =>{
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  const seeMore = () => {
    if (commentsShown <= 5) {
      setCommentsShown(prev=>prev+2)
    }
    else {
      setCommentsShown(1)
    }
  }

  const Owner = props.users.find(each=> each.id===props.id) || {}
  const Comments = props.comment.filter(each=> each.postId===props.id).slice(0,commentsShown)


  return (
    <Card sx={{padding:"10px"}}>
      <Box sx={{display:"flex"}}>
        <Avatar src="https://picsum.photos/200/300" 
          sx={{marginRight:"10px"}}/>
        <Box sx={{display:"flex", flexDirection:"column", height:"100%",width:"100%",position:"relative"}}>
          <Stack spacing={1} direction="row">
            <Typography sx={{fontWeight:"bold"}}>
              {Owner.name}
            </Typography> 
            <Typography sx={{color:"#777"}}>
              {Owner.username}
            </Typography> 
          </Stack>
          <Typography>{props.title}</Typography>
          <IconButton id={props.id} onClick={handleOpen} sx={{position:"absolute", top:"-5px", right:"5px"}}>
            <MoreHoriz sx={{fontSize:"16px",}}/>
          </IconButton>
          <CardMedia component="img" image={props.url} sx={{borderRadius:"20px",height:"auto",width:"auto", minHeight:"400px",maxHeight:"400px", maxWidth:"400px"}}/>
          <Popover
            open={open}
            anchorEl={document.getElementById(props.id)}
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
              {yeetPopperMenu.map(each=> (
                <ListItemButton key={each.icon}>
                  <ListItemIcon>
                    {each.icon}
                  </ListItemIcon>
                  <ListItemText>
                    {each.text(Owner.username)}
                  </ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Popover>
          
          <Stack direction="row" spacing={10}>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <IconButton>
                <ChatBubbleOutline/>
              </IconButton>
              <Typography>1</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <IconButton>
                <LoopOutlined/>
              </IconButton>
              <Typography>2</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <IconButton onClick={handleFavorite}>
                <FavoriteBorderOutlined sx={{color:
                  (favorite ? "red":"black")}}/>
              </IconButton>
              <Typography>3</Typography>
            </Box>
            <IconButton>
              <FileUploadOutlined/>
            </IconButton>
          </Stack>
          {Comments.map(each=> (
            <Comment 
              key={each.id}
              id={each.id}
              name={each.name}
              body={each.body}
              email={each.email}
            />
          ))}
          <ListItemButton onClick={seeMore}>
            <Typography>{commentsShown < 5 ? "See More" : "Hide Comments"}</Typography>
          </ListItemButton>
        </Box>
      </Box>
    </Card>
  )
}

export default Yeets