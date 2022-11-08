import React, {useEffect, useState} from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import axios from 'axios'
import './TvSeries.css'
import CustomPagination from '../../components/Pagination/CustomPagination';

function TvSeries() {
    const [content, setcontent] = useState([])
    const [page, setPage] = useState(1)
    const fetchLatest = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=f56b21c32cdf3221d2b0da04638aa8da&language=en-US&page=${page}`);
        console.log(data);
        setcontent(data.results);
    }
    useEffect(() => {
        fetchLatest();
    }, [page]);
  return (
      <div>
          
          <div className='tvseries'>
          {content && content.map((c) => 
              <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} vote_average={c.vote_average} media_type={c.media_type} />)}
          </div>
          <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default TvSeries