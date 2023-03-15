import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCast } from "services/api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const cast = await fetchCast(movieId);
        setCast(cast.cast);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieId]);

  if (cast.length === 0 && !isLoading) {
    return <p>We don't have any casts for this movie.</p>;
  }

  return (
    <>
      {error && <p>Something went wrong please reload the page!</p>}
      {isLoading && <p>Loading...</p>}
      <ul>
        {cast.map(({ id, name, profile_path, character }) => {
          const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
          return (
            <li key={id}>
              <img src={imageUrl} alt={name} />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
