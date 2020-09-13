import React, { useState } from 'react';
import "./style.css"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Form,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
const InputQuestion = (props) => {
  const [question,setQuestion]=useState("")
  const [answer,setAnswer]=useState("")
  return (
    <React.Fragment>
      <InputGroup >
        <InputGroupAddon addonType="prepend">
          <InputGroupText> ?   </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Please Enter the Question" onChange={(e)=> setQuestion(e.target.value)} />
      </InputGroup>
      <div class="bs-example">
           <form>
            <div class="col-sm-12">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Answer" onChange={(e) => setAnswer(e.target.value)} />
                    <div class="input-group-append">
                    <span class="input-group-text"  onClick={(e)=>props.addquestion(question, answer)}> + </span>
                    <span class="input-group-text" onClick={()=> alert("- pressed")}> - </span>
            </div>
                </div>
            </div>
             </form>
        </div>
      </React.Fragment>
  );
};

export default InputQuestion;
