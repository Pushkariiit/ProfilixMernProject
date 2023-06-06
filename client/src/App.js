import React, { createContext, useReducer } from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Error from './components/Error';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Logout from './components/Logout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { initialState,reducer } from '../src/reducer/UseReducer';

export const userContext = createContext();
const Routing=()=>{
  return(
    <>
      <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}
const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routing/>

    </userContext.Provider>
    
      
    </>
  )
}

export default App

