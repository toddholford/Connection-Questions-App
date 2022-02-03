import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';
import UserColorIndicator from "./UserColorIndicator.component";

function QuestionnaireResponse() {
    return (
        <div>
            <div className="col-1">
                <UserColorIndicator />
            </div>
            <div className="col">
                <MDBCard className="custom-border text-white bg-dark mb-3">
                    <MDBCardBody>
                        <MDBCardText className="col text-center">This is a response to the question.</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    );
}

export default QuestionnaireResponse;