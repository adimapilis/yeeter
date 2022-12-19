import { MoreHoriz } from '@mui/icons-material'
import { Box, Stack, Avatar, IconButton, Typography } from '@mui/material'
import React from 'react'

const Comment = (props) => {
  return (
    <Box sx={{display:"flex", marginTop:"5px"}}>
      <Avatar src="https://picsum.photos/200/300" 
        sx={{marginRight:"10px"}}/>
      <Box sx={{display:"flex", flexDirection:"column", height:"100%",width:"clamp(400px,80vw,100%)",position:"relative"}}>
        <Stack spacing={1} direction="row">
          <Typography sx={{fontWeight:"bold", maxWidth:"18ch",whiteSpace:"nowrap", textOverflow:"ellipsis", overflow:"hidden"}}>
            {props.name}
          </Typography> 
          <Typography sx={{color:"#777"}}>
            {props.email}
          </Typography> 
        </Stack>
        <Typography>
          {props.body}
        </Typography>
        <IconButton sx={{position:"absolute", top:"-5px", right:"5px"}}>
          <MoreHoriz
           sx={{fontSize:"16px",}}/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Comment