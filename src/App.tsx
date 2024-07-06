
import './App.css'
import { About } from './components/About'

import { Clients } from './components/Clients'
import { ContactUs } from './components/ContactUs'

import { Footer } from './components/Footer'

import { Home } from './components/Home'


import { Services } from './components/Services'



function App() {
  
  return (
    <>
      
      <Home  />
      
     
      <Services/>
      <Clients/>
      <About/>
     <ContactUs/>
     
      
      <Footer/>
      
      
    </>
  )
}

export default App


