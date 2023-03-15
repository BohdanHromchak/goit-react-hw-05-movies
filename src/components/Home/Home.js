import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTrending } from "services/api";
import { List, Item  } from './Home.styled';

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
      <List>
        {trendingFilms.map(({ id, title, name }) => (
          <Item key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Home;
