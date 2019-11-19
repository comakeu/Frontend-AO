import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Route } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Route exact path='/' component={HomePage}/>
     <Route path= '/about' component= {AboutPage}/>
     <Footer />
     
    
  
    </div>
  );
}

export default App;
