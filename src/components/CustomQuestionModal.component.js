﻿import React, {useState} from 'react';
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
import firebase from "../config/firebase";

const firestore = firebase.firestore();

function CustomQuestionModal({fullLobbyCode, show, setShow, onClick}) {

    const [formValue, setFormValue] = useState('');

    // const fullLobbyCodeId = fullLobbyCode;

    const lobbyQuestionsRef = firestore.collection('Lobbies').doc(fullLobbyCode).collection('LobbyQuestions');

    const sendQuestion = async(e) => {
        e.preventDefault();

        await lobbyQuestionsRef.add({
            question: formValue
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });

        setFormValue('');

    }

    return (
        <>
            <MDBModal className='bg-primary' tabIndex='-1' show={show} setShow={setShow}>
                <form onSubmit={sendQuestion}>
                    <MDBModalDialog centered>
                        <MDBModalContent className={"bg-dark custom-border"}>
                            <MDBModalHeader>
                                <MDBModalTitle>Type a question for you both to answer.</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={onClick}></MDBBtn>
                            </MDBModalHeader>
                            <MDBModalBody>
                                    <MDBInput value={formValue} onChange={(e) => setFormValue(e.target.value)} className="input-room-code" label='Type your question here...' textarea rows={8} />
                            </MDBModalBody>
                            <MDBModalFooter>
                                <StyledButton buttonType={"submit"} buttonText={"Ask Question"} onClick={onClick}/>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </form>
            </MDBModal>
        </>
    );
}

export default CustomQuestionModal;