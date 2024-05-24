import React from 'react'
import "./resultsname.css"

const Resultsname = ({results}) => {
  const[value,getvalue]=("");
  const handleClick=()=>{
   const name=results.name;
   var inputelement=document.getElementById("input");
   inputelement.value=name;
   
   setTimeout(function() {
    inputelement.value = ''; // 2 saniye sonra input değerini boş string yap
  },2000); 
   
   console.log(name);
  
  }
  return (
    <div onClick={()=>handleClick()} className='search-result'>{results.name}
    
    </div>
    
  )
}

export default Resultsname