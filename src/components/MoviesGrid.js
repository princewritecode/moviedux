import React, { useState, useEffect } from 'react';
import '../styles.css';
export default function MovieGrid()
{
    const [movies, setMovies] = useState([]);
    const m = ['hello', 'good', 'hola', 'tola'];
    useEffect(() =>
    {
        fetch('movies.json').then(res => res.json()).then(val => setMovies(val));
    }, []);
    return (
        <div className='movies-grid'>
            {
                movies.map(movie => (
                    <div key={movie.id} className='movie-card'>
                        <img src={`images/${movie.image}`} alt={movie.title}></img>
                        <div className='movie-card-info'>
                            <h3 movie-card-title>{movie.title}</h3>
                            <p movie-card-genre>{movie.genre}</p>
                            <p movie-card-rating>{movie.rating}</p>

                        </div>
                    </div>

                ))
            }
        </div>
    );
}
