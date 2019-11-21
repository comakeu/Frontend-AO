import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';

const Div = Styled.div`
    width: 30%;
    margin: auto;
`
const Span= Styled.span`
    padding-right: 5px;
`
const Span1= Styled.span`
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

function IssueForm(){
    return(
        <Div>
        <Form>
            <ErrorMessage name='description' render={msg => <div className="error">{msg}</div>} />
            <label> <Span1> Description:</Span1>
                <Field component={()=><textarea type='textarea' name='description' placeholder='Enter description' cols='20' rows= '1'></textarea>}
                
               />
            </label>
            <br />
            <ErrorMessage name='latitude' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Latitude:</Span>
                 <Field component={()=><input type='text' name='latitude' placeholder='Enter latitude' size="32" />}
                />
            </label>
            <br />
            <ErrorMessage name='longitude' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Longitude:</Span> 
            <Field component={()=><input  type='text' name='longitude' size="32" placeholder='Enter longitude'/>}/>
            </label>
            <br />
            <ErrorMessage name='username' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>Username:</Span>
            <Field component ={()=><input type='text' name='username' placeholder='Enter username' size="32"/>}/>
            </label>
            <br />
            <ErrorMessage name='imageUrl' render={msg => <div className="error">{msg}</div>} />
            <label> <Span>ImageUrl:</Span>
            <Field component={()=> <input  type='text' name='imgUrl' placeholder='Enter image url' size="32"/>}/>
            </label>
            <br />
            
            <Button type='submit'>Submit</Button>
        </Form>
        </Div>
    )
}
const IssueFormWithFormik = withFormik(
    {
        mapPropsToValues(){
            return{
                description: '',
                latitude: '',
                longitude: '',
                username: '',
                imageUrl: ''
            }
        },
        validationSchema:Yup.object().shape({
            description:  Yup.string().min(5, 'Too Short!').max(200, 'Too Long!').required("Please enter a description"),
            latiitude:  Yup.string().required("Please enter latitude for the area you're in"),
            longitude:  Yup.string().required("Please enter longitude for the area you're in"),
            username:  Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter username"),
            imageUrl: Yup.string().url().required('Please enter an image url')
        }),
        handleSubmit(values, tools){
            axios.post('https://comake-simple.herokuapp.com/api/issues', values)
            .then(response=>{
                tools.resetForm();
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }
)(IssueForm)
export default IssueFormWithFormik;