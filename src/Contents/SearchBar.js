import React from 'react'
import SearchField from './SearchField'
import Searchresult from './Searchresult'
import SearchResultList from './SearchResultList'

const SearchBar = () => {
    const[results,setResults]=useState([])
    return (
      <div>
        <div className='res-top'>
          <div className='res'>
              <SearchField setResults={setResults}/>
              <div className='search-results'>
                <SearchResultList results={results}/>
              </div>
          </div>
        </div>
      </div>
    )
}

export default SearchBar
