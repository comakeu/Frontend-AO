import React, { useState, useEffect } from 'react';
// // // import Header from './components/Header';
// // // import Footer from './components/Footer';
// // // import HomePage from './components/HomePage';
// // import {Route} from 'react-router-dom';
// import API from './API';

const Issues = () => {
  const [hasError, setErrors] = useState(false)
  const [issues, setIssues] = useState({});

  async function fetchData() {
    const res = await fetch("https://comake-simple.herokuapp.com/api/issues")
    res
      .json()
      .then(res => setIssues(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <div>
      <span>{JSON.stringify(issues)}</span>
      <hr />
      <span>hasError: {JSON.stringify(hasError)}</span>
    </div>
  );
};


export default Issues;
