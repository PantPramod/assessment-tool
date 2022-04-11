import { useState, useEffect } from 'react'
import { data1 as jstest } from './jstest'
import {
    Column,
    Container,
    Section,
    Option,
    Question,
    Timer
} from './Candidate.Styled'




const Candidate = () => {
    const [queNo, setQueNo] = useState(0);
    const [selectedOpt, setSelectedOpt] = useState<string[]>([]);


    const submitHandler = () => {

        console.log("selected option", selectedOpt);
    }

    const nextQuestion = () => {
        if (queNo < jstest.paper.length - 1)
            setQueNo((prevQueNo) => prevQueNo + 1);
        else submitHandler();
    }


    const selectOpt = (arg0: string) => {
        selectedOpt[queNo] = arg0;
        setSelectedOpt([...selectedOpt]);
    }



    // console.log(selectedOpt);

    return (
        <Container>
            <Column>
                <div className='logo'>IWEBCODE</div>
                <div className='subject'>{jstest.topic}</div>
                <div className='description'> {`Question ${queNo + 1} of ${jstest.paper.length}`} </div>
                <Question>{jstest.paper[queNo].Question}</Question>
            </Column>

            <Column>
                <header>
                    <p>Select one answer</p>
                    <Timer>
                        {"00"}:{"00"}:{"00"}
                    </Timer>
                    <button
                        className="next"
                        onClick={() => nextQuestion()}
                        disabled={selectedOpt[queNo] == undefined ? true : false}>
                        {queNo < jstest.paper.length - 1 ? "Next Question" : "Finish"}
                    </button>
                </header>
                <Section>
                    {jstest.paper[queNo].options.map((opt, index) =>
                        <Option
                            className={selectedOpt[queNo] == opt ? "act" : ""}
                            onClick={() => selectOpt(opt)}
                        >
                            <span>{opt}</span>
                            <span className='sn'>{index + 1}</span>
                        </Option>)}
                </Section>

            </Column>
        </Container>


    )
}

export default Candidate