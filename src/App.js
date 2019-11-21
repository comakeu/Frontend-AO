
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import { Route } from 'react-router-dom';
import IssueCard from  './components/IssueCard';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  
  
  const [issues, setIssues] = useState();

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
    } 
  return (

    <div className="App"> 
        <Header />
        <Route exact path='/' component={HomePage}/>
     {/* <Route path= '/about' component= {AboutPage}/> */}
     
        <Route exact path='/about' render= {(props)=>{
        return <AboutPage {...props} issues={issues} setIssues={setIssues}/>
      }} />
       <Route  path="/about/:id" render={(props)=>{
        return <IssueCard {...props} issues = {issues} />
    }}
    />
     <Footer />
    </div> 
     
  
   
  );
};


export default App;
