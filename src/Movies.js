import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movie,isLoading} = useGlobalContext();
  if(isLoading){
    return(
      <div>
        <div className='loading'>Loading...</div>
      </div>
    )
    }    
  return (
    <section className='movie-page'>
      <div className='grid grid-4-col'>{movie && movie.map((curMovie)=>{
        const {imdbID, Title, Poster} = curMovie;
        const movieName=Title.substring(0,15);
        return (
          <NavLink to={`movie/${imdbID}`}>
            <div className='card'>
              <div className='card-info'>
                <h2>{movieName.length>=15?`${movieName}...`:movieName}</h2>
                <img src={Poster}/>
              </div>
            </div>
          </NavLink>
        )
      })}</div>
    </section>
)
}

export default Movies