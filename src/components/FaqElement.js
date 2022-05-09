import React from 'react';
import arrow from '../images/icon-arrow-down.svg'

// {question, answer, ver, setVer, id}
const FaqElement = (props) =>{ 
  
    const showAns = (event) =>{
        const verArray = new Array(5).fill(false);
        const index = parseInt(((event.target.id).split('-'))[1])

        if(props.ver){
            verArray[index] = false;
            props.setVer(verArray);
        }
        else{
            
            verArray[index] = true;
            props.setVer(verArray);
        }

    }

    return(
        <>
            <p className={props.ver? "question q-extend": "question"} onClick={showAns} id={"question-"+ props.id}> {props.question} </p>
            <img src={arrow} className={props.ver? "arrow-dwn arrow-up": "arrow-dwn"} alt="flechas" id={"arrow-"+ props.id} onClick={showAns}/>
            <p className="answer">{props.answer}</p>
        </>
    )

}

export default FaqElement;