import { Badge } from '@mui/material'
import React from 'react'
import { img_300, unavailable } from '../../config/Config'
import './SingleContent.css'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Favorite, ThumbUp } from '@mui/icons-material';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 40,
        top: 22,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        zIndex: 0,
    },
}));

function SingleContent({ id, title, poster, vote_average, media_type }) {
    return (
        <>
            
            <div className='media'>
                <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
                <Box sx={{ display: 'flex', margin: 'auto', alignItems: 'center', }}>
                    
                    {/* <SingleContent key={id} id={id} title={title} /> */}
                    <IconButton aria-label="add">
                        <Favorite fontSize="small" style={{ color: "warning" }} />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon fontSize="small" style={{ color: "warning" }}  />
                    </IconButton>
                    <IconButton aria-label="next">
                        <ThumbUp fontSize="small" style={{ color: "warning" }}  />
                    </IconButton>
                </Box>
            </div>
            
            <Stack spacing={5} direction="column"><StyledBadge badgeContent={media_type} color="success"> </StyledBadge ><StyledBadge badgeContent={vote_average} color={vote_average < 6 ? "error" : "warning"}> </StyledBadge >
            </Stack>
            
        </>
  )
}

export default SingleContent