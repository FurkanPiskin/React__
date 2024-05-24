import React from 'react'
import "./searchresults.css"
import Resultsname from './Resultsname'

const SearchResults = ({results}) => {
 
  return (
    <div className='results-list'>
       {
        results.map((result,id)=>{
          return <Resultsname results={result} key={id}/>
        })
       }

    </div>
  )
}

export default SearchResults