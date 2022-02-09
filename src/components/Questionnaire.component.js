import React, {useState} from 'react';
import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader, MDBModalTitle, MDBBtn, MDBModalBody, MDBInput, MDBModalFooter
} from 'mdb-react-ui-kit';
import QuestionnairePrompt from "./QuestionnairePrompt.component";
import StyledButton from "./StyledButton.component";
import CustomQuestionModal from "./CustomQuestionModal.component";
import QuestionReplyModal from "./QuestionReplyModal.component";

function Questionnaire() {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);
    
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
            <CustomQuestionModal show={centredModal} setShow={setCentredModal} onClick={toggleShow} />
        </>
    );
}


export default Questionnaire;