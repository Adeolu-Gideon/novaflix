import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import './BottomNav.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies")
    else if (value === 2) navigate("/tvseries")
    else if (value === 3) navigate("/search")
  
  }, [value, navigate])
  


  

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
    
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
                  <BottomNavigationAction style={{ color: "black" }} label="Latest" icon={<WhatshotIcon />}/>
          <BottomNavigationAction style={{ color: "black" }}  label="Movies" icon={<MovieIcon />} />
          <BottomNavigationAction style={{ color: "black" }}  label="TV Series" icon={<TvIcon />} />
          <BottomNavigationAction style={{ color: "black" }} label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

