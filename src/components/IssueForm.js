import React from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Styled from 'styled-components';

const Div = Styled.div`
  
    margin: auto;
`
const Span= Styled.span`
    padding-right: 10px;
    font-size: 18px;
`
const Span1= Styled.span`
    padding-right: 5px;
  
    
`
const Button = Styled.button`
    color: #EEEEEE;
    background-color: #2723EC;
    padding: 12px;
    text-align: center;
    border-radius: 10% / 50%;
    font-size: 17px;
    margin-top: -12px;
    margin-left: 30%;
    margin-right: 30%;
`
const Textarea= Styled.textarea`
    vertical-align: top;
    font-size:17px;
    
`
const Input = Styled.input`
    font-size: 17px;
    border-radius: 1% / 50%;
    
`
const Br= Styled.br`
    padding-top: 13px;
`
const Span2= Styled.div`
        padding-top: 16px;
       
`

const Span3= Styled.div`
padding-top: 10px;
`

function IssueForm(){
    return(
        <Div>
        <Form>
            <ErrorMessage name='username' render={msg => <div className="error">{msg}</div>} />
            <Span3>
            <label><Span>Username:  </Span>
                <Field component ={()=><Input type='text' name='username' placeholder='Enter username' size="32"/>}/>
            </label>
            </Span3>
            <Br />

            <ErrorMessage name='imageUrl' render={msg => <div className="error">{msg}</div>} />
            <Span3>
            <label><Span>ImageUrl:  </Span>
                <Field component={()=> <Input  type='text' name='imgUrl' placeholder='Enter image url' size="32"/>}/>
            </label>
            </Span3>
            <Br />
                
            <ErrorMessage name='latitude' render={msg => <div className="error">{msg}</div>} />
            <Span3>
            <label><Span>Latitude:</Span>
                <Field component={()=><Input type='text' name='latitude' placeholder='Enter latitude' size="32" />}
                />
            </label>
            </Span3>
            <Br />

            <ErrorMessage name='longitude' render={msg => <div className="error">{msg}</div>} />
            <Span3>
            <label><Span>Longitude:</Span> 
                <Field component={()=><Input  type='text' name='longitude' size="32" placeholder='Enter longitude'/>}/>
            </label>
            </Span3>
            <Br />

            <ErrorMessage name='description' render={msg => <div className="error">{msg}</div>} />
            <Span2>
            <label><Span1> Description:</Span1>
                <Field component={()=><Textarea type='textarea' name='description' placeholder='Enter description' cols='36' rows= '5'></Textarea>}
                
               />
            </label>
            </Span2>

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