
import './App.scss';
import Home from './home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Watch from './pages/watch/Watch';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
  </Routes>
</Router>
  );
}

export default App;
