import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
      { 
        id: 1, 
        title: "Silence of the Lambs",
        image: "silenceofthelambs.png",
        director: "Jonathan Demme"
      },
      { 
        id: 2, 
        title: "Pride & Prejudice",
        image: "https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpeg",
        director: "Joe Wright"
      },
      { 
        id: 3,
        title: "Selena",
        image: "https://upload.wikimedia.org/wikipedia/en/0/05/Selenathemovie.jpg",
        director: "Gregory Nava"
       },
      { 
        id: 4, 
        title: "Arsenic and Old Lace",
        image: "nypost.com/wp-content/uploads/sites/2/2014/10/mbdaran_ec028.jpg?quality=75&strip=all",
        director: "Frank Capra"
       },
      { 
        id: 5, 
        title: "Where the Heart Is",
        image: "https://m.media-amazon.com/images/I/41DAuh5ebqL._AC_UF894,1000_OL80_.jpeg",
        director: "Matt Williams"
       },
      { 
        id: 6, 
        title: "Steel Magnolias",
        image: "m.media-amazon.com/images/I/919AK+RgLXL_AC_UF894,1000_QL80_.jpg",
        director: "Herbert Ross"
      },
      { 
        id: 7,
        title: "Mulan",
        image: "https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg",
        director: "Tony Bancroft"
       },
      { 
       id: 8,
        title: "My Big Fat Greek Wedding",
        image: "https://m.imbd.com/title/tt0259446/mediaviewer/rm2445451008",
        director: "Joel Zwick"
       },
      { 
        id: 9,
        title: "Star Wars: Episode I - The Phantom Menace",
        image: "upload.wikimedia.org/wikipedia/en/1/15/The_phantom_menace_video_game.jpeg",
        director: "George Lucas"
       },
      { 
        id: 10,
        title: "It's a Wonderful Life",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/25/It%27s_a_Wonderful_Life.jpeg",
        director: "Frank Capra"
       },
      { 
        id: 11,
        title: "The Big Short",
        image: "https://flxt.tmsimg.com/assets/p12157971_p_v8_ae.jpg",
        director: "Adam McKay"
       }
    ]);
 
  const [selectedMovie, setSelectedMovie ] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  } 

return (
  <div>
    {movies.map((movie) => (
      <MovieCard
       key={movie.id} 
       movie={movie}
       onMovieClick={(newSelectedMovie) => {
         setSelectedMovie(newSelectedMovie);
       }}
       />
    ))}
  </div>
 );
}