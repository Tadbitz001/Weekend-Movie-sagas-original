import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // TODO: When a movie poster is clicked, a user should be brought to the `/details` view for that movie.

    //This should show all details **including ALL genres** for the selected movie, including title, description, 
    //and the image, too! Use Sagas and Redux to handle these requests and data.

    //function to handle click and capturing movie id from movie list
    //id is property of movies.map movie see below for reference
    //will dispatch to rootsaga 
    function handleClick (event, id) { //2️⃣
        console.log('id', id)
        dispatch ({
            type:'GET_MOVIE_ID', //3️⃣
            payload: id //3️⃣
        })
        history.push('/moviedetails')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3> 
                            {/* 1️⃣ */}
                            <img onClick={(event)=> handleClick(event, movie)}  src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;