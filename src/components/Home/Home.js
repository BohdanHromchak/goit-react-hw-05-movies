import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTrending } from "services/api";

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const trending = await fetchTrending();
        setTrendingFilms(trending.results);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <p>Something went wrong please reload the page!</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {trendingFilms.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
