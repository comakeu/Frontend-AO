import React from 'react';
import {useParams} from  'react-router';

function IssueCard(){
    let {id} = useParams();
    const issue = props.issues.filter(issue=>issue.id.toString() ===id );    

    return (
        <h1> Hello</h1>
    )
}

export default IssueCard;