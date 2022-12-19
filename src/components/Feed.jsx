import { useState, useEffect } from 'react'
import { AppBar, Box, IconButton, Typography } from '@mui/material'
import { AutoAwesome, } from '@mui/icons-material'
import { Yeets, CreateYeet } from '.'



const Feed = () => {
  const [posts,setPost] = useState([])
  const [comments,setComments] = useState([])
  const [users,setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => setPost(json.slice(0,3)))
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => setComments(json.slice(0,15)))
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  }, []);

  return (
    <Box sx={{width:"clamp(50%, 90% , 100%)"}}  >
      <AppBar  position="sticky" sx=
        {{display:"flex", 
        justifyContent:"space-between", 
        flexDirection:"row",
        backgroundColor:"rgba(255,255,255,.9)",
        alignItems:"center",
        height:"60px",
        paddingLeft:"10px",
        paddingRight:"10px",
        boxShadow:"none"
      }}>
        <Typography variant="h6" 
          sx={{color:"black",
          fontWeight:"bold"
          }}>
            Home
        </Typography>
        <IconButton size="small" >
          <AutoAwesome sx={{
              fontSize:"25px",
              color:"primary"
            }}/>
        </IconButton>
      </AppBar>
      <CreateYeet/>
      {posts.map(each =>
        (<Yeets 
          key={each.id}
          id={each.id}
          title={each.title}
          url={each.url}
          comment={comments}
          users={users}
        />)
      )}
    </Box>
  )
}

export default Feed