import React from 'react';
import Styled from 'styled-components';

const Img = Styled.img`
    height: 80px;
    width: 80px;
    margin-left: 15%;
    margin-right: 32%;
`
const Div =  Styled.div`
display: flex;
font-size: 30px;
margin-top: 35px;
border-bottom: 2px solid #f5f5f5;


`
const H1 = Styled.h1`
 margin-top: -14px;

`
function Header(){
    return(
    <Div>
        <Img src={ require ('../logo.png')} alt='CoMake logo' />
        <H1> Comake</H1>
        
    </Div>
    )
}
export default Header;