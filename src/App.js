import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed'

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Box sx={{ backgroundColor: '#000'}}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/video:id' element={<VideoDetails/>} />
      <Route path='/channel:id' element={<ChannelDetails/>}/>
      <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
    </Routes>
  </Box>
  </BrowserRouter>
  </>
  )
}

export default App