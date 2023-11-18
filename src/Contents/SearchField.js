import React, { useState } from 'react'
import {FaSearch} from "react-icons/fa"
import axios from 'axios'
//import Searchresult from './Searchresult'

const SearchField = ({setResults}) => {
    const[inputs,setInputs]=useState("")
    //const[searchResult,setSearchResult]=useState([])

    async function fetchData(value) {
        try {
           await axios.get(
            "http://localhost:3400/api/v1/user/all-users"
          ).then(res=>{
            const result=res.data.users.filter((user)=>{
                return value && user && user.name  && user.name.toLowerCase().includes(value) && user._id && user.email.includes(value)
            })
            //setSearchResult(result)
            setResults(result)
          }
          )
          
        } catch (err) {
          console.log("Error in fetching Data", err);
        }
      }
      const handleChange=(value)=>{
        setInputs(value)
        fetchData(value)
      }
  return (
    <div>
      <FaSearch id='search-icon'/>
      <input placeholder='Type To Search..' value={inputs} onChange={(e)=>handleChange(e.target.value)}/>
      <div className=''>
        
      </div>
    </div>
  )
}

export default SearchField
/*{searchResult.map((el,index)=>{
    return(<li>
        <Searchresult key={index} result={el}/>
    </li>
    )
})}*/