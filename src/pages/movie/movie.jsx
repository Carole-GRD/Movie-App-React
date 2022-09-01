import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MovieList from "../../containers/movie-list/movie-list";

const Movie = (props) => {

    const { screen } = props;

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // console.log('hello');
        axios.get(`https://api.themoviedb.org/3/movie/${screen}?api_key=c9e23b610c2f0c1040a493fc10ce5aaf&language=fr-FR&page=${page}`)
            .then(({data}) => {
                console.log(data)
                setMovies(data.results)
            })
        }, [page, screen])

    const nextbtn = () => {
        setPage(p => p + 1)
    }

    const previousbtn = () => {
        if (page > 1)
            setPage(p => p - 1)    // accolades non nécessaires
    }

    const resetPage = () => {
        setPage(1)
    }

    return (
        <div>
            Popular
            <button onClick={nextbtn}>Next</button>
            <button onClick={previousbtn}>Previous</button>
            <button onClick={resetPage}>Reset</button>
            <MovieList movies={movies}></MovieList>
        </div>
    );
};

export default Movie;