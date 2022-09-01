import style from './nav-bar.module.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Link to="/search">Search</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/nowplaying">Now Playing</Link>
        </nav>
    );
};

export default NavBar;