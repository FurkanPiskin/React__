import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactForm from './Components/ContactForm/ContactForm'
import Button from './Components/Button/Button'

function App() {
 

  return (
   <div>
    <Navigation/>
    <ContactHeader/>
    <ContactForm/>
    
   </div>
  )
}

export default App
