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

function IssueForm(props){
    console.log(props)
    return(
        <Div>
        <Form>
            
            <ErrorMessage name='imgURL' render={msg => <div className="error">{msg}</div>} />
            <Span3>
            <label><Span>ImageUrl:  </Span>
                <Field as={()=> <Input placeholder='Enter image url' size="32"  type='text'  name='imgURL'/> }   name='imgURL' />
            </label>
            </Span3>
            <Br />
                
            <ErrorMessage name='latitude' render={msg => <div className="error">{msg}</div>} />
            <Span3>
            <label><Span>Latitude:</Span>
                <Field as={()=><Input type='text' name='latitude' placeholder='Enter latitude' size="32" />}
                />
            </label>
            </Span3>
            <Br />

            <ErrorMessage name='longitude' render={msg => <div className="error">{msg}</div>} />
            <Span3>
            <label><Span>Longitude:</Span> 
                <Field as={()=><Input  type='text' name='longitude' size="32" placeholder='Enter longitude'/>}/>
            </label>
            </Span3>
            <Br />

            <ErrorMessage name='description' render={msg => <div className="error">{msg}</div>} />
            <Span2>
            <label><Span1> Description:</Span1>
                <Field as={()=><Textarea type='textarea' name='description' placeholder='Enter description' cols='36' rows= '5'></Textarea>}
                
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
            
                imgURL: '',
                 latitude: '',
                longitude: '',
                description: '',
            }
        },
        validationSchema : Yup.object().shape({
           
            imgURL: Yup.string().url().required("Please enter image url"),
            latitude: Yup.number().required("Please enter latitude"),
            longitude: Yup.number().required("Please enter longitude"),
            description: Yup.string().required("Please enter description")

            
        }),
        handleSubmit(values, tools){
            axios.post('https://c0mak3.herokuapp.com/api/issues', values)
            .then(response=>{
                console.log(response.data)
                // tools.resetForm();
            })
            .catch(error=>{
                // tools.setErrors(error);
                console.log(error);
            })
        }
    }
)(IssueForm)
export default IssueFormWithFormik;