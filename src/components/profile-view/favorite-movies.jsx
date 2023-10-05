import React from "react";

function FavoriteMovies({ favoriteMovieList }) {
    return (
        <div>
            <h2>Favorite Movies</h2>
            {favoriteMovieList.map((movie) => {
                return (
                    <div key={movies._id}>
                        <img src={movies.ImageURL} />
                        <Link to={`/movies/${movies._id}`}>
                             <h4>{movies.Title}</h4>
                         </Link>
                         <button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from list</button>
                    </div>
                 )
            })
            }
        </div>
    )
}

export default FavoriteMovies 