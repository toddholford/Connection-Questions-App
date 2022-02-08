import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';
import UserColorIndicator from "./UserColorIndicator.component";
import StyledButton from "./StyledButton.component";

function QuestionnaireResponse(props) {
    return (
        <div className={props.className}>
            <div className="col-1">
                <UserColorIndicator csc={props.csc}/>
            </div>
            <div className="col">
                <MDBCard className="custom-border text-white bg-dark mb-3">
                    <MDBCardBody>
                        {/*<MDBCardText className="col text-center">This is a response to the question.</MDBCardText>*/}
                        <StyledButton buttonText="Add Your Response" />
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
    );
}

export default QuestionnaireResponse;