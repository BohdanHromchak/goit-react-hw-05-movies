import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchReviews } from "services/api";
import { Item, List, Author } from './Reviews.styled';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setIsLoading(true);
        const reviews = await fetchReviews(movieId);
        setReviews(reviews.results);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [movieId]);

  if (reviews.length === 0 && !isLoading) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <>
      {error && <p>Something went wrong please reload the page!</p>}
      {isLoading && <p>Loading...</p>}
      <List>
        {reviews.map(({ author, content, id }) => {
          return (
            <Item key={id}>
              <Author>{author}</Author>
              <p>{content}</p>
            </Item>
          );
        })}
      </List>
    </>
  );
};
export default Reviews;
