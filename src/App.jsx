import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Technology from './Components/Technology'
import Bollywood from './Components/Bollywood'
import Hollywood from './Components/Hollywood'
import Food from './Components/Food'
import Fitness from './Components/Fitness'

import { createContext } from 'react';
import data from './data/BlogData';
import Details from './Components/Details'
import Footer from './Components/Footer'

export const Store = createContext();
function App() {
  return (
    <>
      <div className='header'><span>The</span>Siren</div>
      <Navbar />
      <hr className='w-80' />
      <Store.Provider value={{ data }}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/bollywood' element={<Bollywood />}></Route>
          <Route path='/technology' element={<Technology />}></Route>
          <Route path='/hollywood' element={<Hollywood />}></Route>
          <Route path='/fitness' element={<Fitness />}></Route>
          <Route path='/food' element={<Food />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
        </Routes >
      </Store.Provider>
      <Footer/>
    </>
  )
}

export default App
