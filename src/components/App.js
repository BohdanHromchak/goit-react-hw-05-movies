import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";

// import Cast from "./Cast/Cast";
// import Home from "./Home/Home";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import Movies from "./Movies/Movies";
// import Reviews from "./Reviews/Reviews";

const Cast = lazy(() => import("./Cast/Cast"))
const Home = lazy(() => import("./Home/Home"))
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"))
const Movies = lazy(() => import("./Movies/Movies"))
const Reviews = lazy(() => import("./Reviews/Reviews"))


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
