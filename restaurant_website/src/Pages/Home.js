import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../Images/banner.jpg'
import { Button } from 'react-bootstrap';
function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Burger33</h1>
        <p>Delicious Hamburgers <br/> with 33 Spicy Mixed</p>
       <Link to="/menu"><button>Order now</button></Link>

        
      </div>

    </div>

  )
}

export default Home