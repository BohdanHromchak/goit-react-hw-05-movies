import { useState, useEffect } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { fetchDetails } from "services/api";
import imageNotFound from "../images/imageNotFound.webp"
import { MovieCard, MovieInfo, DetailsLink, GoBack, AdditionalTitle, DetailsLinkWrap } from './MovieDetails.styled';


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

    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : imageNotFound;

    return (
      <>
     
        <GoBack to={location.state?.from || "/"}>Go Back</GoBack> 
        <MovieCard>
        <img src={imageUrl} alt={title} />
        <MovieInfo>
        <h2>
          {title} {release_date && release_date.slice(0, 4)}
        </h2>
        <b>Vote average:</b>
        <p>{vote_average}</p>
        <b>Overview:</b>
        <p>{overview}</p>
        <b>Genres:</b>
        <p>
          
          {genres.length !== 0 && genres.map((genre) => genre.name).join(" ")}
        </p>
        </MovieInfo>
        </MovieCard>

        <AdditionalTitle>Additional information</AdditionalTitle>
        <DetailsLinkWrap>
        <DetailsLink to="cast" >Cast</DetailsLink>
        <DetailsLink to="reviews">Reviews</DetailsLink>
        </DetailsLinkWrap>
        <Outlet />
      </>
    );
  }

  return (
    <>
        <GoBack to={location.state?.from || "/"}>Go Back</GoBack> 
      {error && <p>Something went wrong please reload the page!</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
};
export default MovieDetails;
