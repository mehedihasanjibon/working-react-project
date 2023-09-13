import React, { useEffect, useState } from 'react';

const Home = () => {
    const [movies , setMovies] = useState([]);

    useEffect( ()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setMovies(data))
    }, [])

    return (
        <div>
            <h1> This is home page: {movies.length} </h1>
        </div>
    );
};

export default Home;