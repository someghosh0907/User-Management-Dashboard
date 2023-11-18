import React from 'react'
import Searchresult from './Searchresult'

const SearchResultList = ({results}) => {
  return (
    <div className='results-list'>
      {results.map((result,id)=>{
        return <Searchresult result={result} key={id}/> 
      })}
    </div>
  )
}

export default SearchResultList
