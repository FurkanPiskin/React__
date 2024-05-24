
import  styles from './App.module.css';


import React from 'react';


import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import Calc from './calculator/components/App';
import DoList from './todo_list/App2';
import Algoritma from './Algorithmss/Algoritma';
import Home from './components/Home';

function App() {
 

  return (
 <Router>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/algorithms' element={<Algoritma/>}/>
<Route path='/calculator' element={<Calc/>}/>
<Route path='/DoList' element={<DoList/>}/>



</Routes>
 </Router>   

  );
}

export default App;

