import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetails () {

    const individualMovie = useSelector(store => store.movieInfo);//8️⃣

    console.log('movie:', individualMovie)
    return(
        <>
        <div>
            <h2>Movie Details</h2>
            {individualMovie.title}
            <br></br>
            <img src={individualMovie.poster}></img>
            <br></br>
            {individualMovie.description}
        </div>
        </>
    )

}

export default MovieDetails;