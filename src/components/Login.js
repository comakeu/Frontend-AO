import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
function Login(props){
    return(
        <Form>
            <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
            <label> Email:
                <Field type='text' placeholder='Enter email' name='email' />
            </label>
            <br />
            <ErrorMessage name='password' render={msg => <div className="error">{msg}</div>} />
            <label> Password:
                <Field type='text' placeholder='Enter password' name='password' />
            </label>
            <br />                     
            <button type='submit'>Login</button>
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
    handleSubmit(values, tools){
        axios.post('http:reqres.in/api/users', values)
        .then(response=>{
            tools.resetForm();
        })
        .catch(error=>{
            console.log(error);
        })
    }
})

(Login);


export default LoginWithFormik;