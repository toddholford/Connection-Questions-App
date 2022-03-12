import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody
} from 'mdb-react-ui-kit';
import firebase from "../../config/firebase";
import QuestionnairePrompt from "../QuestionnairePrompt.component";
import StyledButton from "../StyledButton.component";
import TestQuestionnaireResponse from "./TestQuestionResponse";
import TestCustomQuestionModal from "./TestCustomQuestionModal";
import {useCollectionData} from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

function TestQuestionnaire() {

    const [testCustomQuestionModal, setTestCustomQuestionModal] = useState(false);

    const toggleShow = () => setTestCustomQuestionModal(!testCustomQuestionModal);

    const lobbyQuestionsRef = firestore.collection('Lobbies').doc().collection('LobbyQuestions')

    const query = lobbyQuestionsRef.limit(100);

    // const questions = query;

    //explore using a useEffect hook
    const [questions] = useCollectionData(query, {idField: 'id'});

    return (
        <>
            <MDBCard className="custom-border text-white bg-dark mb-3">
                <MDBCardHeader className="card-header-borderline-theme-1">Ask a question for you both to answer:</MDBCardHeader>
                <MDBCardBody>
                    <div className="row">
                        <div className="row align-items-center">
                            <QuestionnairePrompt />
                            <div className="col">
                                <div className="row">
                                    <StyledButton csc={"button-question-field"} buttonText={"Send Question"}/>
                                </div>
                                <div className="row">
                                    <StyledButton csc={"button-question-field"} buttonText={"Get a new Question"}/>
                                </div>
                                <div className="row">
                                    <StyledButton onClick={toggleShow} csc={"button-question-field"} buttonText={"Type your own Question"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>

            {questions && questions.map(qtn => <TestQuestionnaireResponseBox key={qtn.id} askedQuestion={qtn}/>)}

            {/*<div>*/}
            {/*    {questions && questions.map(qtn => <TestQuestionnaireResponseBox key={qtn.id} askedQuestion={qtn}/>)}*/}
            {/*</div>*/}

            <TestCustomQuestionModal show={testCustomQuestionModal} setShow={setTestCustomQuestionModal} onClick={toggleShow} />
        </>
    );
}

function TestQuestionnaireResponseBox(props) {

    const {AskedQuestion} = props.askedQuestion;

    return (
        <MDBCard className="custom-border text-white bg-primary mb-3">
            <MDBCardHeader className="card-header-borderline-theme-2">
                {AskedQuestion}
            </MDBCardHeader>
            <MDBCardBody>
                <TestQuestionnaireResponse className={"row justify-content-start"} csc={"user-1-color-dot-icon position-absolute p-2 rounded-circle"}/>
                <TestQuestionnaireResponse className={"row justify-content-end"} csc={"user-2-color-dot-icon position-absolute p-2 rounded-circle"}/>
            </MDBCardBody>
        </MDBCard>
    );
}

export default TestQuestionnaire;