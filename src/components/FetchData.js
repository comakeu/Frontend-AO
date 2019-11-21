import React, {useEffect, useState} from 'react';
import  axios from 'axios';
import Styled from 'styled-components';



const Span1 = Styled.span`
  font-weight: bolder;
  margin-left:2%;
  text-align: center;
`
const Img = Styled.img`
    height: 240px;
    width: 100%;
    border-bottom: 2px solid #f5f5f5;
    
`
const Div = Styled.div`
    width: 30%;
    box-shadow: -8px 5px 5px #f5f5f5;
    margin-bottom: 5px;
     padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
`
const Div1= Styled.div`
 display: flex;
 justify-content: space-around;
 flex-flow: row wrap;
 
`
const P = Styled.p`
    text-align: justify;
   
`
const Span3 = Styled.span`
        color: #2723EC;
        font-weight: bolder;
        
`
const P1 = Styled.p`
        margin-top: -15px;
`

function FetchData(props){
    const issues = props.issues;

    
    function splitDescription(str){
        const arr = str.split(' ');
        const words =  arr.splice(0,12);
        const newDes = words.join(' ');
        return newDes;
    }
    
    
    
    return(
         <Div1>
            
                { 
                issues.map(issue=>{
                    return(
                        <Div key= {issue.id}>
                            <Img src={issue.imgURL} alt='photo of a city'/>
                             <p><Span1>{issue.username}</Span1> </p>
                             <p><span>Number of votes: {issue.votes}</span> </p>
                    <P> <span>{splitDescription(issue.description)}</span> </P> 
                     <P1><Span3>See More</Span3> </P1>  
                             
                            
                        </Div>
                    )
                })
                }
      
    </Div1>
    )
}
export default FetchData;    