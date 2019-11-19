import React from 'react';
import Styled from 'styled-components';

const Img = Styled.img`
    height: 80px;
    width: 80px;
    margin-left: 25%;
    margin-right: 22%;
`
const Div =  Styled.div`
display: flex;
font-size: 30px;
margin-top: 35px;

`
const H1 = Styled.h1`
 margin-top: -16px;

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