import React from 'react';
export default function MovieCard({ movie })
{

    const onHandleError = (e) =>
    {
        e.target.src = 'images/default.jpg';
    };

    const getRatingClass = (rating) =>
    {
        if (rating >= 8)
        {
            return 'rating-good';
        }

        if (rating > 5 && rating < 8)
        {
            return 'rating-ok';
        }

        else
        {
            return 'rating-bad';
        }

    };

    return (
        <div>

            <div key={movie.id} className='movie-card'>
                <img src={`images/${movie.image}`} alt={movie.title} onError={onHandleError}></img>
                <div className='movie-card-info'>
                    <h3 className='movie-card-title'>{movie.title}</h3>
                    <p className='movie-card-genre'>{movie.genre}</p>
                    <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>

                </div>
            </div>


        </div >
    );

}