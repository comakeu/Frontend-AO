import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
    margin-left: 20%;
    margin-right:20%;
    text-align: center;
`


function Intro(){
    return(
        <Div className='intro'>
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Div>
    )
}
export default Intro;