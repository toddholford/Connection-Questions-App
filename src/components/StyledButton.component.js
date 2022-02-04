import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function StyledButton(props) {
    return (
        <MDBBtn className={"custom-border btn-primary " + props.csc} type={"button"}>
            {props.buttonText}
        </MDBBtn>
    );
}

export default StyledButton;