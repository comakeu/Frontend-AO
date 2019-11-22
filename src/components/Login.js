import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';
import {Link} from 'react-router-dom'

const Span= Styled.span`
    padding-right: 5px;
`
const Button = Styled.button`
    color: #EEEEEE;
    background-color: #2723EC;
    width: 89px;
    height: 21 px;
    text-align: center;
    border-radius: 10% / 50%;;
    margin-left: 30%;
    margin-right: 30%;
`
function Login(props){
    return(
        <Form type="submit">
            <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Email:</Span>
                <Field type='text' placeholder='Enter email' name='email' />
            </label>
            <br />
            <ErrorMessage name='password' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Password:</Span>
                <Field type='text' placeholder='Enter password' name='password' />
            </label>
            <br />                     
            <Button type='submit'>Login</Button>
            {/* <Link to ='/about'><Button type='submit'>Login</Button></Link> */}
        </Form>
    )
}
const LoginWithFormik= withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: ''
        }
},
    validationSchema:Yup.object().shape({
        email:  Yup.string().email('Invalid email').required("Please enter your email"),
        password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter password"),
    }),
    handleSubmit(values, tool){
        debugger
        axios.post('https://c0mak3.herokuapp.com/api/auth/login', values)
        .then(response=>{
            debugger
            console.log(response.data);
            tools.resetForm();
        })
        .catch(error=>{      
              debugger


            tools.setErrors(error);
        })
    }
}
)(Login);


export default LoginWithFormik;