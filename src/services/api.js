// TRENDINGS
export async function fetchTrending() {
  const response = await fetch(
    `
      https://api.themoviedb.org/3/trending/all/day?api_key=9736a35e31abd19d6144591c8e77ccff`
  );
  const trending = await response.json();
  return trending;
}

// SEARCH
export async function fetchSearch(movieName) {
  const response = await fetch(
    `
      https://api.themoviedb.org/3/search/movie?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US&page=1&include_adult=false&query=${movieName}`
  );
  const searchQuery = await response.json();
  return searchQuery;
}

// CREDITS
export async function fetchCredits(id) {
  const response = await fetch(
    `    
https://api.themoviedb.org/3/movie/${id}/credits?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US`
  );
  const credits = await response.json();
  return credits;
}

//REVIEWS
export async function fetchReviews(id) {
  const response = await fetch(
    `    
      https://api.themoviedb.org/3/movie/${id}/reviews?api_key=9736a35e31abd19d6144591c8e77ccff&language=en-US&page=1`
  );
  const reviews = await response.json();
  return reviews;
}
