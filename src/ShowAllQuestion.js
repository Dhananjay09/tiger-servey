import React from 'react';
import { Checkbox } from 'semantic-ui-react'
const ShowAllQuestion=(props)=>{
    console.log(props.data)
     return (
         props.data.map((i, data)=>{
             return (
                 <div>
                     {console.log("Data"+props.data[data].question)}
                <h2>
                    {props.data[data].question}
                </h2>
                <h4 size="lg">
             {props.data[data].answer1 &&  <Checkbox label={props.data[data].answer1} /> }
                </h4>
                <h4 size="lg">
                {props.data[data].answer2    && <Checkbox label={props.data[data].answer2} /> }
                </h4>
                <h4 size="lg">
             {props.data[data].answer3 && <Checkbox label={props.data[data].answer3} />}   
                </h4>
                <h4 size="lg">
             {props.data[data].answer4 &&   <Checkbox label={props.data[data].answer4} />}   
                </h4>
            </div>  
             )
         })
                 
        )}
export default ShowAllQuestion;