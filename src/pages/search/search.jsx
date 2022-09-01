import axios from "axios";
import { useState } from "react";
import MovieList from "../../containers/movie-list/movie-list";
import SearchBar from "../../containers/search-bar/search-bar";

const Search = () => {

    const [movies, setMovies] = useState([]);
    const [page, setpage] = useState(1);

    const searchFilm = (movieName) => {
        // console.log(movieName);
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=${page}&include_adult=false`)
            // .then(data => console.log(data))
            .then(({ data }) => {setMovies(data.results)})
            .catch(err =>console.log(err))
    }

    return (
        <div>
            <SearchBar placeholder="Movie name" 
                onSearch={searchFilm} />
                {/* <ul>
                    {
                        movies.map(
                            movie => <li>{movie.title} {movie. release_date}</li>
                        )
                    }
                </ul> */}
                {/* ↓ On envoie "movies" à l'enfant "movie-list" */}
                <MovieList movies={movies}></MovieList>  
        </div>
    );
};

export default Search;