import logo from './logo.svg';
import './App.css';
import Searchbar from './componets/Searchbar';
import { useState } from 'react';
import SearchResults from './componets/SearchResults';

function App() {
  const[results,SetResults]=useState([]);
  const[value,getvalue]=useState("");
  const innerhtml=()=>{
    var element=document.getElementsByClassName("search-result")[0].innerHTML;
  
    getvalue(element);
    console.log(value);
     }
  return (
    <div className="App">
  <div className="searchbar-container">
   <Searchbar setResults={SetResults} />
    <SearchResults results={results}/>
{innerhtml}
  </div>
    </div>
  );
}

export default App;
