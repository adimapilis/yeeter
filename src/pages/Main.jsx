import React from 'react'
import { Container, Stack} from '@mui/material'
import { Feed, Rightbar, Sidebar } from '../components'

const Main = () => {
  
  return (
   <Container sx={{display:"flex", justifyContent:"center"}}>
      <Stack direction="row">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
   </Container>

  )
}

export default Main