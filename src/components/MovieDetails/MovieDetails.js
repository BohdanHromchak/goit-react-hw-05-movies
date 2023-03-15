import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { fetchDetails } from "services/api";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const details = await fetchDetails(movieId);
        setMovie(details);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieId]);

  if (movie) {
    const {
      genres,
      title,
      vote_average,
      overview,
      poster_path,
      release_date
    } = movie;

    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
      <>
        <Link to={location.state?.from ?? "/"}>Go Back</Link>
        <img src={imageUrl} alt={title} />
        <h2>
          {title} {release_date && release_date.slice(0, 4)}
        </h2>
        <p>Vote average: {vote_average}</p>
        <p>Overview: {overview}</p>
        <p>
          Genres:
          {genres.length !== 0 && genres.map((genre) => genre.name).join(" ")}
        </p>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </>
    );
  }
  return (
    <>
      <Link to={location.state?.from ?? "/"}>Go Back</Link>
      {error && <p>Something went wrong please reload the page!</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
};
export default MovieDetails;
