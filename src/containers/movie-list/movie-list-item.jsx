import style from './movie-list.module.css';
const MovieListItem = (props) => {

    const { title, overview, poster_path } = props; 

    return (
        <div className={style.movie}>
            {/* <img src={"https://image.tmdb.org/t/p/w500/" + poster_path}></img> */}

            {
                poster_path && <img src={"https://image.tmdb.org/t/p/w500/" + poster_path}></img>
            }
            
            <div className={style.info}>
                <h1>{title}</h1>
                <p>{overview}</p>
            </div>
        </div>
    );
};
export default MovieListItem;