import React, { useState, useEffect } from 'react';
// // // import Header from './components/Header';
// // // import Footer from './components/Footer';
// // // import HomePage from './components/HomePage';
// // import {Route} from 'react-router-dom';
// import API from './API';

const Issues = () => {
  const [issues, setIssues] = useState([]);

   function fetchData() {
   fetch("https://comake-simple.herokuapp.com/api/issues")
    .then(res =>res.json())
      .then(res => setIssues(res))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>{issues.map(item => {

      console.log(item)

      return (
        <div>
        <div> {item.username}</div >
        <img src={item.imgURL} />
        <div>votes: {item.votes}</div >
        </div>
      ) 
      })}
    </div >
  );
};


export default Issues;
