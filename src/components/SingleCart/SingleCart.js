import React from 'react';

const SingleCart = ({movie}) => {
    // console.log(props);
    // const {movie} = props;
    console.log(movie);

    const {poster, movieName, description, imdbRating, watchTime} = movie;

    return (
        <div className='movie-cart card text-center w-100 m-auto col-md-6'>
            <div className='movie-poster w-25 m-auto'>
                <img className='w-75' src={poster} alt="" />
            </div>
            <h3> {movieName} </h3>
            <p> {description} </p>
            <div className='timeAndRating d-flex justify-content-around'>
                <p> WatchTim: {watchTime}</p>
                <p> Rating: {imdbRating} </p>
            </div>
            <button className='btn btn-info w-75 m-auto'> Book Now </button>
        </div>
    );
};

export default SingleCart;