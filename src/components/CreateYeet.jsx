import { useState } from 'react'
import { Container, Stack, Avatar, Box, Button, ButtonGroup, IconButton, InputBase, Popper, List, Paper, ListItemButton, Typography, ClickAwayListener } from '@mui/material'
import { Check, ExpandMore, GroupOutlined, Public, PublicOutlined } from '@mui/icons-material'
import { makeYeetButtons, fillerPic }  from "./constants"


const CreateYeet = () => {
  const [openAudience, setOpenAudience] = useState(false)
  const [audience, setAudience] = useState(1)
  return (
    <Container sx={{display:"flex", borderBottom:"solid 1px #ddd"}}>
      <Avatar src={fillerPic} />
      <Stack direction="column" sx={{paddingLeft:"10px"}}>
        <ClickAwayListener onClickAway={()=>setOpenAudience(false)}>
          <Box>
            <Button id="audience" onClick={()=>setOpenAudience(true)}
              sx={{fontSize:"12px", 
                width:"100px", 
                padding:"0px 5px", 
                borderRadius:"50px", 
                fontWeight:"bold", 
                border:"solid 1px #ccc", 
                textTransform:"capitalize",
                marginBottom:"15px"
            }}>
              Everyone<ExpandMore/>
            </Button>
            <Popper open={openAudience} anchorEl={document.getElementById("audience")}>
              <Paper sx={{width:"300px"}}>
                <List>
                  <Typography variant="h6" sx={{padding:"5px", fontWeight:"bold"}}>Choose Audience</Typography>
                  <ListItemButton onClick={()=>setAudience(1)} sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <PublicOutlined />
                      <Typography>Everyone</Typography>
                    </Box>
                    {audience===1 && <Check /> }
                  </ListItemButton>
                  <ListItemButton onClick={()=>setAudience(2)}  sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <Box sx={{display:"flex"}}>
                      <GroupOutlined/> 
                      <Typography>Flutter Circle </Typography>
                    </Box>
                    {audience===2 && <Check /> }
                  </ListItemButton>
                </List>
              </Paper>
            </Popper>
          </Box>
        </ClickAwayListener>
        <InputBase placeholder="What's happening?" sx={{marginBottom:"10px"}}></InputBase>
        <Button
          sx={{fontSize:"12px", 
          width:"150px", 
          padding:"0px", 
          borderRadius:"50px", 
          fontWeight:"bold", 
          textTransform:"capitalize",
          marginBottom:"20px"}}>
            <Public sx={{fontSize: "15px", paddingRight:"3px"}}/> 
          Everyone can reply
        </Button>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: "10px"}}>
          <ButtonGroup>
            {makeYeetButtons.map(each => (
              <IconButton key={each.name}>{each.icon}</IconButton>
            ))}
          </ButtonGroup>
          <Button variant="contained" sx={{borderRadius:"20px"}}>Yeet</Button>
        </Box>
      </Stack>
    </Container>
  )
}
export default CreateYeet