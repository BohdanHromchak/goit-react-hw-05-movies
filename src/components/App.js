import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import { fetchTrending } from 'services/api';
import { useEffect, useState } from 'react';

const App = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(trending => {
      setTrendingFilms(trending.results);
    });
  }, []);

  return (
    <div>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <Routes>
        <Route path="/" element={<Home trendingFilms={trendingFilms} />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
export default App;
