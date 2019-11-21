import React, {useState} from 'react';
import {useParams} from  'react-router';
import {Link} from 'react-router-dom';


function IssueCard(props){
    let {id} = useParams();
    const issue = props.issues.filter(issue=>issue.id.toString() ===id );   
    const [votes, setVotes] = useState(issue[0].votes);
    function addVote(){
        setVotes(votes + 1); 
     } 

    return (
        <div>
            <img src={issue[0].imgURL} alt='photo of a city'/>
            <h3>{issue[0].username}</h3>
            <p>Number of votes: {votes}</p>
            <p>Latitude: {issue[0].latitude} </p>
            <p>Longitude: {issue[0].longitude}</p>
            <p>{issue[0].description}</p>
            <p> Consider this issue urgent, give it a vote.</p>
            <button onClick={addVote} type='submit'>Vote</button>
            <Link to="/about">
            <h4>Go Back</h4>
            </Link>
            
        </div>
    )
}

export default IssueCard;