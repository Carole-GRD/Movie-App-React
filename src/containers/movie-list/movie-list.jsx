import style from './movie-list.module.css';
import MovieListItem from "./movie-list-item";

const MovieList = (props) => {

    const { movies } = props;

    return (
        <div className={style.movieGrid}>
            {/* MovieList */}
            {/* {movies.map(
                movie => <h1>{movie.title}</h1>
            )} */}
            {movies.map(
                movie => <MovieListItem
                    key={movie.id}
                    // title={movie.title}
                    // overview={movie.overview}
                    // poster_path={movie.poster_path}

                    // Equivalent avec destructuring
                    {...movie}
                    />
            )}
        </div>
    );
};

export default MovieList;