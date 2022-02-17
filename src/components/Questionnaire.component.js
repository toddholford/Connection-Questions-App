import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody
} from 'mdb-react-ui-kit';
import QuestionnairePrompt from "./QuestionnairePrompt.component";
import StyledButton from "./StyledButton.component";
import CustomQuestionModal from "./CustomQuestionModal.component";
import QuestionnaireResponse from "./QuestionnaireResponse.component";
import firebase from "../config/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

function Questionnaire() {

    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);

    const lobbyQuestionsRef = firestore.collection('Lobbies').doc().collection('LobbyQuestions')

    const query = lobbyQuestionsRef.orderBy('createdAt').limit(100);

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

            <div>
                {questions && questions.map(qtn => <QuestionnaireResponseBox key={qtn.id} askedQuestion={qtn}/>)}
            </div>
            
            <CustomQuestionModal show={centredModal} setShow={setCentredModal} onClick={toggleShow} />
        </>
    );
}

function QuestionnaireResponseBox(props) {

    const {AskedQuestion} = props.askedQuestion;

    return (
        <MDBCard className="custom-border text-white bg-primary mb-3">
            <MDBCardHeader className="card-header-borderline-theme-2">
                {AskedQuestion}
            </MDBCardHeader>
            <MDBCardBody>
                <QuestionnaireResponse className={"row justify-content-start"} csc={"user-1-color-dot-icon position-absolute p-2 rounded-circle"}/>
                <QuestionnaireResponse className={"row justify-content-end"} csc={"user-2-color-dot-icon position-absolute p-2 rounded-circle"}/>
            </MDBCardBody>
        </MDBCard>
    );
}

export default Questionnaire;