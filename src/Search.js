import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const{query,setQuery,error}=useGlobalContext();
  return <> 
  <section className='search-section'>
    <h2>Search your Favourite Movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text" placeholder='search here'value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
      </div>
    </form>
    <div className="card-error">
      <p>{error.show && error.msg}</p>
    </div>
  </section>
  </>
}

export default Search