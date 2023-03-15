import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCast } from "services/api";
import imageNotFound from "../images/imageNotFound.webp"
import { List, Item, Name} from './Cast.styled';

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
      <List>
        {cast.map(({ id, name, profile_path, character }) => {
          const imageUrl = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : imageNotFound;
          
          return (
            <Item key={id}>
              <img src={imageUrl} alt={name} />
              <Name>{name}</Name>
              <p>Character: {character}</p>
            </Item>
          );
        })}
      </List>
    </>
  );
};
export default Cast;
