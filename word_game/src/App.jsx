
import './App.css';
import Login from './LoginPage/Login';

import { UserProvider } from './context/UserContext';
import Register from './RegisterPage/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import TRAİN from './RegisterPage/deneme';
import Wordgame from './Wordgamepage/Wordgame';
import Keyboard from './components/Keyboard';
import Timer from './components/Timer';




function App() {
  
  return (
    <UserProvider>
    <Router>
      
    <Routes>
    <Route path='/' element={<Wordgame/>}/>
   
    <Route path='/login' element={<Register/>}/>


    
    
    
    </Routes>
     
     </Router> 
     </UserProvider>
  );
}

export default App;
