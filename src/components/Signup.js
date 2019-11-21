import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';

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


function Signup(props){
    return(
        <Form>
            <ErrorMessage name='first_name' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>First Name:</Span>
                <Field type='text' placeholder='Enter name' name='first_name' />
            </label>
            <br />
            <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Email:</Span>
                <Field type='text' placeholder='Enter email' name='email' />
            </label>
            <br />
            <ErrorMessage name='password' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Password:</Span>
                <Field type='text' placeholder='Enter password' name='password' />
            </label>
            <br/>
            <ErrorMessage name='last_name' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Last Name:</Span>
                <Field type='text' placeholder='Enter last name' name='last_name' />
            </label>
            <br/>
            <ErrorMessage name='phone' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Phone Number:</Span>
                <Field type='text' placeholder='Enter phone number' name='phone' />
            </label>
            <br/>
            <Button type='submit'>Sign up</Button>
        </Form>    
    )
}

const SignupWithFormik =  withFormik(
    {
        mapPropsToValues(){
            return{
                email: "",
	            password: "",
	            first_name: "",
	           last_name: "",
	           phone: ""
            }
        },
        validationSchema: Yup.object().shape({
            first_name:  Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter your  first name"),
            last_name:  Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter your last name"),
            phone_number:  Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter your number"),
            email:  Yup.string().email('Invalid email').required("Please enter your email"),
            password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter password"),
        }),
        handleSubmit(values, tools){
            axios.post('https://c0mak3.herokuapp.com/api/users', values)
            .then(response=>{
                console.log(response);
                tools.resetForm();
                alert(`Your account has been created`);
                
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

)(Signup);

export default SignupWithFormik;