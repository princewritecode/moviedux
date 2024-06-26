import React, { useState, useEffect } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';
export default function MovieGrid()
{
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() =>
    {
        fetch('movies.json').then(res => res.json()).then(val => setMovies(val));
    }, []);
    const searchHandleChange = (e) =>
    {
        setSearchTerm(e.target.value);
    };
    const filteredMovies = movies.filter((movie) =>
    {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
        <div>
            <input
                type='text' onChange={searchHandleChange} className='search-input' value={searchTerm} placeholder='Searchmovies'
            />
            <div className='movies-grid'>
                {
                    filteredMovies.map(movie => (
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    ))
                }
            </div>
        </div>
    );
}
