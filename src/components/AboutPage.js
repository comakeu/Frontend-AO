import React from 'react';
import Intro from './Intro';
import IssueForm from './IssueForm';
import Styled from 'styled-components';
import FetchData from './FetchData';

const Div1 = Styled.div`
   
    text-align: center;
`
function AboutPage(props){
    
    return(
        <div>
            <Intro />
            <Div1>
                <h2>Post an Issue</h2>
            <IssueForm />

            </Div1>
            <Div1>
                <h2>Issues raised</h2>
                
                
               <FetchData issues={props.issues} setIssues={props.setIssues}/>
            </Div1>
            
        </div>

    )
}
export default AboutPage;