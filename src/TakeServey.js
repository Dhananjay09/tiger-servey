import React from 'react';
import PetsSharpIcon from '@material-ui/icons/PetsSharp';
import Select from 'react-select';
import InputQuestion from './InputQuestion'
import FirstAnswer from './FirstAnswer'
import ShowAllQuestion from './ShowAllQuestion'
import { Form,Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const options = [
    { value: 'Multi', label: 'Multi select' },
    { value: 'Single', label: 'Single select' },
  ];
  class TakeServey extends React.Component {
    constructor(){
      super()
      this.state = {
        selectedOption: null,
        option: "",
        multi1: {},
        questions:[],
        callforsubmit: 0
      };
    }
    handlequestion = (question, answer) =>{
      this.setState({...this.state,  multi1: {
        "question": question,
        "answer1": answer,
        "answer2": 1
      }})
      
    }
    addsecondanswer = (answer)=> {
      this.setState({...this.state,  multi1: {
        ...this.state.multi1,
        "answer2": answer,
        "answer3": 1
      }})
    }
    addthirdanswer = (answer)=> {
      this.setState({
        ...this.state, multi1: {
          ...this.state.multi1, "answer3": answer, "answer4": 1
        }
      })
    }
    addforthanswer = (answer)=> {
      this.setState({
        ...this.state, multi1: {
          ...this.state.multi1, "answer4": answer, "submit": 1
        }
      })
      
    }
    
    update=()=>{
       const temp=this.state.questions;
       temp.push(this.state.multi1)
       this.setState({
        selectedOption: null,
        option: "",
        multi1: {},
        questions: temp
       })
    }

    callforsubmit=()=>{
      this.update()
      this.setState({
        ...this.state, 
        callforsubmit: 1
      })
    }

    handleChange = selectedOption => {
      this.setState( { ...this.state,selectedOption: selectedOption, option: selectedOption.value });
    };
    render() {
      const { selectedOption } = this.state;
      return (
          <React.Fragment>
        <div>
        <h1 style={{ color: "green"}}> <PetsSharpIcon /> Survey Tiger</h1>
        <Select 
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        </div>

      {this.state.callforsubmit===1 ? <ShowAllQuestion data={this.state.questions}/> :  <div>     
        {this.state.option!=="" && <InputQuestion addquestion={this.handlequestion}/>}
        {this.state.multi1.answer2!==undefined && <FirstAnswer addsubanswer={this.addsecondanswer}/>}
        {this.state.multi1.answer3!==undefined && <FirstAnswer addsubanswer={this.addthirdanswer}/>}
        {this.state.multi1.answer4!==undefined && <FirstAnswer addsubanswer={this.addforthanswer}/>}
        {this.state.multi1.submit!==undefined  && <Button style={{background: "red"}} onClick={()=> this.update()}> Add Question</Button>}
        {this.state.multi1.submit!==undefined && <Button style={{background: "red"}}  onClick={ ()=> this.callforsubmit() } > Publish</Button>}</div>}
        

        </React.Fragment>
      );
    }
  }
export default TakeServey;