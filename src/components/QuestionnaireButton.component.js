import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function QuestionnaireButton(props) {
    return (
        <MDBBtn className="custom-border btn-primary button-question-field" type={"button"}>
            {props.buttonText}
        </MDBBtn>
    );
}

export default QuestionnaireButton;