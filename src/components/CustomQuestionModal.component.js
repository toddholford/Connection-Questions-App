import React, {useState} from 'react';
import {
    MDBBtn,
    MDBInput,
    MDBModal, MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import StyledButton from "./StyledButton.component";

function CustomQuestionModal(props) {
    return (
            <MDBModal className='bg-primary' tabIndex='-1' show={props.show} setShow={props.setShow}>
                <MDBModalDialog centered>
                    <MDBModalContent className={"bg-dark custom-border"}>
                        <MDBModalHeader>
                            <MDBModalTitle>Type a question for you both to answer.</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={props.onClick}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                                <MDBInput className="input-room-code" label='Type your question here...' textarea rows={8} />
                        </MDBModalBody>
                        <MDBModalFooter>
                            <StyledButton buttonText={"Ask Question"} />
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
    );
}

export default CustomQuestionModal;