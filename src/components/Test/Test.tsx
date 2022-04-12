import React, { useState } from 'react'
import {
    Column,
    Container,
    Section,
    Option,
    Question,
    Timer
} from './Test.styled';
import CountdownTimer from './CountdownTimer'
import { data1 as data} from './jstest';

export const LocalContext = React.createContext({});


type propsType={
     topic:string|null
}


const Test = ({topic}:propsType) => {
    const [queNo, setQueNo] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<string[]>([]);
        

    const submitHandler = () => {
        alert(selectedOpt);  
        console.log("selected option", selectedOpt);
    }

    const nextQuestion = () => {
        if (queNo < data.paper.length - 1)
            setQueNo((prevQueNo) => prevQueNo + 1);
        else submitHandler();
    }


    const selectOpt = (arg0: string) => {
        selectedOpt[queNo] = arg0;
        setSelectedOpt([...selectedOpt]);
    }

  const datatopass={
    selectedOpt:selectedOpt,
    submitHandler:submitHandler
   }

 
  return (
    <>
    <LocalContext.Provider value={datatopass}>
     <Container>
                <Column>
                    <div className='logo'>IWEBCODE</div>
                    <div className='subject'>{data.topic}</div>
                    <div className='description'> {`Question ${queNo + 1} of ${data.paper.length}`} </div>
                    <Question>{data.paper[queNo].Question}</Question>

                </Column>

                <Column>
                    <header>
                        <p>Select one answer</p>
                        <Timer>
                            <CountdownTimer />
                        </Timer>
                        <button
                            className="next"
                            onClick={() => nextQuestion()}
                            disabled={selectedOpt[queNo] == undefined ? true : false}>
                            {queNo < data.paper.length - 1 ? "Next Question" : "Finish"}
                        </button>
                    </header>
                    <Section>
                        {data.paper[queNo].options.map((opt, index) =>
                            <Option
                                className={selectedOpt[queNo] == opt ? "act" : ""}
                                onClick={() => selectOpt(opt)}
                                key={index}
                            >
                                <span>{opt}</span>
                                <span className='sn'>{index + 1}</span>
                            </Option>)}
                    </Section>

                </Column>
            </Container>
            </LocalContext.Provider>
    </>
  )
}

export default Test