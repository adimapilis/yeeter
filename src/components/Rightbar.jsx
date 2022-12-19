import React from 'react'
import { AppBar, Box, InputBase, Typography, List, Link } from '@mui/material'
import { Search } from '@mui/icons-material'
import { toFollowData, linkData, trendingData } from './constants'
import { Trending, ToFollow} from "./"

const Rightbar = () => {

  return (
    <Box className="rightbar" width="350px" position="sticky">
      <AppBar  position="sticky" sx=
        {{display:"flex", 
        justifyContent:"space-between",
        backgroundColor:"white",
        alignItems:"center",
        height:"60px",
        padding:"5px",
        boxShadow: "none"
      }}>
        <Box sx={{display:"flex", 
        backgroundColor:"#eee",
        alignItems:"center",
        borderRadius:"30px",
        padding:"5px",
        width:"330px"}}>
          <Search sx={{color:"black", 
            padding:"5px 15px 5px 5px"
          }}/>
          <InputBase placeholder="Search Twitter"/>
        </Box>
      </AppBar>
      <Box backgroundColor="#eee" borderRadius="20px" sx={{margin:"10px"}}>
        <Typography variant="h6" 
          sx={{fontWeight:"bold", 
          padding:"10px 10px"
        }}>Trends for you
        </Typography>
        <List sx={{padding:"0px"}}>
        {trendingData.map(each=>
          <Trending key={each.tag} tag={each.tag} yeets={each.yeets} />)}
        </List>
      </Box>
      <Box backgroundColor="#eee" borderRadius="20px" sx={{margin:"10px"}}>
        <Typography variant="h6" 
            sx={{fontWeight:"bold", 
            padding:"10px 10px"
          }}>Who to follow
          </Typography>
        <List sx={{padding:"0px"}}>
            {toFollowData.map(each =>
              <ToFollow key={each.username} img={each.img} name={each.name} username={each.username}/>
            )}
        </List>
      </Box>
      <Box width="350px" sx={{paddingLeft: "10px"}}>
      {linkData.map(each => 
        <Link key={each}underline="none" variant="h6" href="#"
          sx={{fontSize:"12px", 
          padding:"3px", 
          color:"#555"
        }}>{each}</Link>
      )}
        <Typography variant="h6" sx={{fontSize:"12px", color:"#555"
        }}>© 2022 Yeeter, Inc.</Typography>
      </Box>
    </Box>
  )
}

export default Rightbar