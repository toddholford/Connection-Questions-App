import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdb-react-ui-kit';
import QuestionnairePrompt from "./QuestionnairePrompt.component";
import QuestionnaireButton from "./QuestionnaireButton.component";

function Questionnaire() {
    return (
        <MDBCard className="custom-border text-white bg-dark mb-3">
            <MDBCardHeader className="card-header-borderline-theme-1">Ask a question for you both to answer:</MDBCardHeader>
            <MDBCardBody>
                <div className="row">
                    <div className="row align-items-center">
                        <QuestionnairePrompt />
                        <div className="col">
                            <div className="row">
                                <QuestionnaireButton buttonText={"Send Question"}/>
                            </div>
                            <div className="row">
                                <QuestionnaireButton buttonText={"Get a new Question"}/>
                            </div>
                            <div className="row">
                                <QuestionnaireButton buttonText={"Type your own Question"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default Questionnaire;