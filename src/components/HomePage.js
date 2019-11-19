import React from 'react';
import Login from './Login';
import Signup from  './Signup';
import Styled from 'styled-components';

const H4 = Styled.h4`
    color: #3A3939
`

const Div =  Styled.div`
    display: flex;
    margin-right: 10%;
    margin-left: 8%;
    margin-bottom: 15px;

`
const Div1 = Styled.div`
    background-image: url('https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60');
    height: 320px;
    width: 65%;
    margin-right: 5%;
`
const H2 = Styled.h2`
    color: white;
    text-align: center;
    margin-top: 30%;
`
const Div2 = Styled.div`
    width:60%;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 24px;
`
function HomePage(){
    return(
        <Div>
            <Div1>
                <Div2>
                <H2>Make the world better, post an issue</H2>
                </Div2>
                
            </Div1>

            <div class-name="homepage-forms"> 
                <div>
                    <H4>Don't have an account</H4>
                    <Signup />
                </div>
                <div>
                    <H4>Already have an account</H4>
                    <Login />
                </div>
               
            </div>
        </Div>
        
    )
}
export default HomePage;