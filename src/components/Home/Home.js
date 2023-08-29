import React, { useEffect, useState } from 'react';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);

    return (
        <div>
            <h3> this is home content </h3>
        </div>
    );
};

export default Home;