import React,{useState} from "react";
const FirstAnswer=(props)=>{
    const [answer, setAnswer]=useState()
    return (
        <React.Fragment>
        <div class="bs-example">
           <form>
            <div class="col-sm-12">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Answer" onChange={(e)=> setAnswer(e.target.value)}/>
                    <div class="input-group-append">
                    <span class="input-group-text"  onClick={(e)=>{props.addsubanswer(answer)}}> + </span>
                    <span class="input-group-text" onClick={()=> {props.remove(props.id)}}> - </span>
            </div>
                </div>
            </div>
             </form>
        </div>
        </React.Fragment>

    )}
export default FirstAnswer;