import React from 'react';
import './App.css';
import Footer from './Components/Common/Footer';
import NavBar from './Components/Common/NavBar';
import Subscribe from './Pages/Subscribe'
import Slides from './Components/Common/Slides'


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Slides/>
    <Subscribe/>
   <Footer/> 
    </div>
  );
}

export default App;
