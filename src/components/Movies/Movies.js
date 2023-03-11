import { useState } from "react"
import { fetchSearch } from "services/api"

const Movies = () => {
const [movieName, setMovieName] = useState("")
const [searchedMovies, setSearchedMovies] = useState([])

const handleSubmit = (e) => {
    e.preventDefault()
    fetchSearch(movieName).then((movies) => {
        setSearchedMovies(movies.results)
    })
    setMovieName("")
}
    return(
        <>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value.toLowerCase())}
        />
        <button type="submit" >
          Search
        </button>
      </form>
      <ul>
        {searchedMovies.map(({id, title}) => (<li key={id}>{title}</li>))}
      </ul>
      </>
      )
}

export default Movies