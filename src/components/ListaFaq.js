import React, {useState} from 'react';
import arrow from '../images/icon-arrow-down.svg'

const ListaFaq = () => {

    const [ver, setVer] = useState(new Array(5).fill(false));

    const questions = [
        "How many team members can I invite?",
        "What is the maximum file upload size?",
        "How do I reset my password?",
        "Can I cancel my subscription?",
        "Do you provide additional support?"

    ]
    const answers = [
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        "No more than 2GB. All files in your account must fit your allotted storage space.",
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
        "Yes! Send us a message and we’ll process your request no questions asked.",
        "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    ]

    const showAns = (event) =>{

        const verArray = new Array(5).fill(false);
        const index = parseInt(((event.target.id).split('-'))[1])
        if(ver[index]){
            verArray[index] = false;
            setVer(verArray);
        }
        else{
            verArray[index] = true;
            setVer(verArray);
        }
    }
    return(
        <>              
            {ver.map( (item, index) => 
                <article className={item? "faq extend": "faq"} key={"key-"+index}>
                    <p className={item? "question q-extend": "question"} onClick={showAns} id={"question-"+ index}> {questions[index]} </p>
                    <img src={arrow} className={item? "arrow-dwn arrow-up": "arrow-dwn"} alt="flechas" id={"arrow-"+ index} onClick={showAns}/>
                    <p className="answer">{answers[index]}</p>
                </article>)}
        </>
    )
}

export default ListaFaq;
