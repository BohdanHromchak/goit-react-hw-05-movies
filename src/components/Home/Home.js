const Home = ({ trendingFilms }) => {
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms.map(({ id, title, name }) => (
          <li key={id}>{title || name}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
