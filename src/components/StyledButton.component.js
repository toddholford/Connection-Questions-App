import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

function StyledButton(props) {
    return (
        <MDBBtn onClick={props.onClick} className={"custom-border btn-primary " + props.csc} type={props.buttonType}>
            {props.buttonText}
        </MDBBtn>
    );
}

export default StyledButton;