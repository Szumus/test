
import {Search} from "@mui/icons-material"

import { Paper, IconButton} from '@mui/material'

const SearchBar = () => {
  
    return (
    <Paper 
    component="form"
    onSubmit={() => {}}
   sx={{
    borderRadius: 20,
    border: '1px solid #e3e3e3',
    pl:2,
    boxShadow: 'none',
    mr:{sm: 5}
   }}
    >
        <input type="text" className='search-bar' placeholder='Search..' value="" onSubmit={()=> {}}/>
        <IconButton type='submit' className='p-[10px] text-red'>
         <Search/>
        </IconButton>

    </Paper>
  )
}

export default SearchBar