import React, {useState} from 'react';
import {MDBCard, MDBCardBody, MDBCardText} from 'mdb-react-ui-kit';
import UserColorIndicator from "./UserColorIndicator.component";
import StyledButton from "./StyledButton.component";
import QuestionReplyModal from "./QuestionReplyModal.component";

function QuestionnaireResponse(props) {
    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);
    
    return (
        <>
        <div className={props.className}>
            {/*<div className="col-1">*/}
            {/*    <UserColorIndicator csc={props.csc}/>*/}
            {/*</div>*/}
            <div className="col">
                <MDBCard className="custom-border text-white bg-dark mb-3">
                    <MDBCardBody className={"text-center"}>
                        {/*<MDBCardText className="col text-center">This is a response to the question.</MDBCardText>*/}
                        <StyledButton onClick={toggleShow} buttonText="Add Your Answer" />
                    </MDBCardBody>
                </MDBCard>
            </div>
        </div>
        <QuestionReplyModal show={centredModal} setShow={setCentredModal} onClick={toggleShow} />
        </>
    );
}

export default QuestionnaireResponse;