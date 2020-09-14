import React from 'react';
import { Checkbox } from 'semantic-ui-react'
import { Form,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./displayquestion.css"
const ShowAllQuestion=(props)=>{
     return (
         <div>{
         props.data.map((i, data)=>{
             return (
                 <div className="display">
                <h2>
                    {props.data[data].question}
                </h2>
                <h4 size="lg" style={{marginLeft: "0px"}}>
             {props.data[data].answer1 &&  <Checkbox label={props.data[data].answer1} /> }
                </h4>
                <h4 size="lg" style={{marginLeft: "0px"}}>
                {props.data[data].answer2    && <Checkbox label={props.data[data].answer2} /> }
                </h4>
                <h4 size="lg" style={{marginLeft: "0px"}}>
             {props.data[data].answer3 && <Checkbox label={props.data[data].answer3} />}   
                </h4>
                <h4 size="lg" style={{marginLeft: "0px"}}>
             {props.data[data].answer4 &&   <Checkbox label={props.data[data].answer4} />}   
                </h4>
            </div>  
             )
         })}
         <Button style={{background: "red"}}> Confirm </Button>
        </div>
                 
        )}
export default ShowAllQuestion;