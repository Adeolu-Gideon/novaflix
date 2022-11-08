import axios from 'axios'
import React, {useEffect, useState} from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import './Latest.css'
import '../../App.css'
import CustomPagination from '../../components/Pagination/CustomPagination';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const Latest = () => {
    const [content, setcontent] = useState([])
    const [page, setPage] = useState(1)
    const fetchLatest = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=f56b21c32cdf3221d2b0da04638aa8da&page=${page}`);
        console.log(data);
        setcontent(data.results);
    }
    useEffect(() => {
        fetchLatest();
    }, [page]);
    
  return (
      <div>
          <Box className='bgimage' style={{ xs: { fontSize: '1.9rem', lineHeight: 1.4 }, background: '#dde1e7', marginTop: '80px'}}>
              {/* <img src={bgimage} alt='merlin' style={{ width: '100%', height: '50vh' }} /> */}
              <Typography align='center' variant='h3' style={{color: 'black', padding: 25}}>
                  Welcome to NOVAFLIX.
                  Thousands of movies, TV shows and much more. Explore now.
              </Typography>
              <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', margin: 'auto', alignItems: 'center', width: '80vw' , borderRadius: '30px'}}
              >
                  <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Latest Movies on NovaFlix"
                      inputProps={{ 'aria-label': 'search novaflix' }}
                  />
                  <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                      <SearchIcon />
                  </IconButton>
                  
              </Paper>
          </Box>
          <div className='latest'>
              {content && content.map((c) => 
                  <SingleContent key={c.id} id={c.id} poster={c.poster_path} vote_average={c.vote_average} media_type={c.media_type}/>)}
          </div>
          <CustomPagination setPage={setPage} />
    </div>
  )
}

export default Latest