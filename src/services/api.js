// Home (trendings)
export async function fetchTrending() {
  const response = await fetch(
    `
      https://api.themoviedb.org/3/trending/all/day?api_key=9736a35e31abd19d6144591c8e77ccff`
  );
  const trending = await response.json();
  return trending;
}

// MovieDetails (search by id)
export async function fetchDetails(movieId) {
  const response = await fetch(
    `
    https://api.themoviedb.org/3/movie/${movieId}?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US`
  );
  const details = await response.json();
  return details;
}

// Movies (search by name)
export async function fetchSearch(movieName) {
  const response = await fetch(
    `
      https://api.themoviedb.org/3/search/movie?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US&page=1&include_adult=false&query=${movieName}`
  );
  const searchQuery = await response.json();
  return searchQuery;
}

// Cast
export async function fetchCast(id) {
  const response = await fetch(
    `    
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US`
  );
  const cast = await response.json();
  return cast;
}

// Reviews
export async function fetchReviews(id) {
  const response = await fetch(
    `    
      https://api.themoviedb.org/3/movie/${id}/reviews?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US&page=1`
  );
  const reviews = await response.json();
  return reviews;
}
