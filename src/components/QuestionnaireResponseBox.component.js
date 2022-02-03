import React from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader} from "mdb-react-ui-kit";
import QuestionnaireResponse from "./QuestionnaireResponse.component";

function QuestionnaireResponseBox() {
    return (
        <MDBCard className="custom-border text-white bg-primary mb-3">
            <MDBCardHeader className="card-header-borderline-theme-2">
                What did you usually get in trouble for as a kid?
            </MDBCardHeader>
            <MDBCardBody>
                <div className="row justify-content-start">
                    <QuestionnaireResponse />
                </div>
                <div className="row justify-content-end">
                    <QuestionnaireResponse />
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}

export default QuestionnaireResponseBox;