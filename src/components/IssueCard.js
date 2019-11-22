import React, {useState} from 'react';
import {useParams} from 'react-router';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const Div = Styled.div`
    width: 60%;
    margin: auto;
     box-shadow: 12px 12px 2px 1px #f5f5f5;
     padding: 10%;
     border-left: 12px solid #f5f5f5;
     border-top: 12px solid #f5f5f5;
     margin-top: 5%;
     margin-bottom: 5%;
     text-align: center;
     font-size: 18px;
     
`
const Img = Styled.img`
        height: 320px;
        width: 100%;
`
const Button = Styled.button`
    color: #EEEEEE;
    background-color: #2723EC;
    padding: 12px;
    text-align: center;
    border-radius: 10px;
    font-size: 17px;
    margin-top: -12px;
    margin-left: 30%;
    margin-right: 30%;
`
const Bold = Styled.span`
    font-weight:bold;
`

function IssueCard(props){
    let {id} =useParams()
    
    const issue = props.issues.filter(issue=>issue.id.toString() ===id );
    const [votes, setVotes] = useState(issue[0].votes);
    console.log(votes);
    
    function addVote(){
       setVotes(votes + 1); 
    }
    return(
        <Div>
            <Img src={issue[0].imgURL} alt='photo of a city'/>
            <h3>{issue[0].username}</h3>
            <p><Bold>Number of votes: </Bold>{votes}</p>
            <p><Bold>Latitude: </Bold>{issue[0].latitude} </p>
            <p><Bold>Longitude: </Bold>{issue[0].longitude}</p>
            <p>{issue[0].description}</p>
            <p> Consider this issue urgent, give it a vote.</p>
            <Button onClick={addVote} type='submit'>Vote</Button>
            <Link to="/about">
            <h4>Go Back</h4>
            </Link>
            
        </Div>
    )
}
export default IssueCard;