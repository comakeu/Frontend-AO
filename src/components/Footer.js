import React from 'react';
import Styled from 'styled-components';

const P = Styled.p`
    border-top: 2px solid #f5f5f5;
    text-align: center;
    padding-top: 2%;
`

function Footer(){
 return(
     <P>&copy; CoMake 2019</P>
 )
}
export default Footer;