
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Route } from 'react-router-dom';

import  { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const Issues = () => {
  
  const [issues, setIssues] = useState({});
  useEffect(()=>{
        axios.get("https://comake-simple.herokuapp.com/api/issues")
        .then(res=>{
            console.log(res.data)
            setIssues(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])
    if (!issues || issues.length === 0) {
      return <div>Loading information...</div>;

  

  return (

    <div className="App"> 
        <Header />
     <Route exact path='/' component={HomePage}/>
     {/* <Route path= '/about' component= {AboutPage}/>
      */}
      <Route path='/about' render= {(props)=>{
        return <AboutPage {...props} issues={issues} setIssues={setIssues}/>
      }

      } />
     <Footer />
    </div> 
     
  
   
  );
};


export default Issues;
