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
import StyledButton from "../StyledButton.component";
import firebase from "../../config/firebase";

const firestore = firebase.firestore();

function TestCustomQuestionModal(props) {

    const lobbyQuestionsRef = firestore.collection('Lobbies').doc().collection('LobbyQuestions')

    const [customQuestionFormValue, setCustomQuestionFormValue] = useState('');

    const sendQuestion = async(e) => {
        e.preventDefault();

        await lobbyQuestionsRef.add({
            question: customQuestionFormValue
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });

        setCustomQuestionFormValue('');

    }

    return (
        <>
            <MDBModal className='bg-primary' tabIndex='-1' show={props.show} setShow={props.setShow}>
                <form onSubmit={sendQuestion}>
                    <MDBModalDialog centered>
                        <MDBModalContent className={"bg-dark custom-border"}>
                            <MDBModalHeader>
                                <MDBModalTitle>Type a question for you both to answer.</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={props.onClick}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                <MDBInput value={customQuestionFormValue} onChange={(e) => setCustomQuestionFormValue(e.target.value)} className="input-room-code" label='Type your question here...' textarea rows={8} />
                            </MDBModalBody>
                            <MDBModalFooter>
                                <StyledButton buttonType={"submit"} buttonText={"Ask Question"} onClick={props.onClick}/>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </form>
            </MDBModal>
        </>
    );
}

export default TestCustomQuestionModal;