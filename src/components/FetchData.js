import React, {useState, useEffect} from 'react';
import axios from 'axios';
 

function FetchData(props){
  console.log(props.issues)
    
    function splitDescription(str){
      const arr = str.split(' ');
      const words =  arr.splice(0,12);
      const newDes = words.join(' ');
      return newDes;
  }
    
    return(
      <div> 
      hi
        { 
            props.issues.map(issue=>{
                return(
                     <div key= {issue.id}>
                        <img src={issue.imgURL} alt='photo of a city'/>
                        <p><span>{issue.username}</span> </p>
                        <p><span>Number of votes: {issue.votes}</span> </p>
                        <p> <span>{splitDescription(issue.description)}</span> </p> 
                        <p><span>See More</span> </p>  
                     </div>
                    )
                })
        }
      
    </div>      
    )
}
export default FetchData;