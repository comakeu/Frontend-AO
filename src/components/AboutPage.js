import React from 'react';
import Intro from './Intro';
import IssueForm from './IssueForm';
import Styled from 'styled-components'

const Div1 = Styled.div`
   
    text-align: center;
`
function AboutPage(){
    return(
        <div>
            <Intro />
            <Div1>
                <h2>Post an Issue</h2>
            <IssueForm />

            </Div1>
            
        </div>

    )
}
export default AboutPage;