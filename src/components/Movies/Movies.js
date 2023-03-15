import { useState, useEffect } from "react";
import { fetchSearch } from "services/api";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { List, Item  } from './Movies.styled';

const Movies = () => {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setSearchParams({ query: inputValue });
    setInputValue("");
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const fetchdata = async () => {
      try {
        setMovies([]);
        setNotFound(false);
        setIsLoading(true);
        const movieDetails = await fetchSearch(movieName);
        setMovies(movieDetails.results);
        console.log(movieDetails.results.length);
        if (movieName !== "" && movieDetails.results.length === 0) {
          setNotFound(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>Something went wrong please reload the page!</p>}
      {isLoading && <p>Loading...</p>}
      {notFound && (
        <p>
          There is not any movie for this request. Please, change the query!
        </p>
      )}
      <List>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Movies;
