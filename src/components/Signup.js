import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

function Signup(props){
    return(
        <Form>
            <ErrorMessage name='name' render={msg => <div className="error">{msg}</div>} />
            <label> Name:
                <Field type='text' placeholder='Enter name' name='name' />
            </label>
            <br />
            <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
            <label> Email:
                <Field type='text' placeholder='Enter email' name='email' />
            </label>
            <br />
            <ErrorMessage name='password' render={msg => <div className="error">{msg}</div>} />
            <label> Password:
                <Field type='text' placeholder='Enter password' name='password' />
            </label>
            <br/>
            <button type='submit'>Sign up</button>
        </Form>    
    )
}

const SignupWithFormik =  withFormik(
    {
        mapPropsToValues(){
            return{
                name: '',
                email: '',
                password: ''
            }
        },
        validationSchema: Yup.object().shape({
            name:  Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter your name"),
            email:  Yup.string().email('Invalid email').required("Please enter your email"),
            password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter password"),
        }),
        handleSubmit(values, tools){
            axios.post('http:reqres.in/api/users', values)
            .then(response=>{
                tools.resetForm();
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

)(Signup);

export default SignupWithFormik;