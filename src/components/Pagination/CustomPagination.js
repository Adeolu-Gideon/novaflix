import React from 'react'
import Pagination from '@mui/material/Pagination';
//import './CustomPagination.css'

export default function CustomPagination({ setPage, numOfPages = 50 }) {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
                color:'primary',

            }}
        >
            
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numOfPages}
                color='warning'
                
                />
            
        </div>
    );
}