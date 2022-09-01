import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './containers/nav-bar/nav-bar';

import Movie from './pages/movie/movie';
import Search from './pages/search/search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/search' element={<Search />} />
          <Route path='/popular' element={<Movie screen="popular" />} />
          <Route path='/nowplaying' element={<Movie screen="now_playing" />} />
          <Route path='*' element={<Navigate to='/search' />} />
        </Routes>
        {/* <h1>Ceci est toujours là</h1> */}
        {/* ↓ plus besoin car on a les routes */}
        {/* <Search /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
