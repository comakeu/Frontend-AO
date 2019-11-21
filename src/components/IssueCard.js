import React from 'react';
import {useParams} from  'react-router';

function IssueCard(){
    let {id} = useParams();
        

    return (
        <h1> Hello</h1>
    )
}

export default IssueCard;