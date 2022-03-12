import React, {useState} from 'react';
import {MDBCard, MDBCardTitle, MDBInput} from 'mdb-react-ui-kit';
import {useHistory} from "react-router-dom";
import StyledButton from "./StyledButton.component";
import firebase from "../config/firebase";
import {GenerateLobbyCode} from "../js/LobbyCodeGenerator";

const firestore = firebase.firestore();

const lobbyCode = GenerateLobbyCode();
const lobbyDocId = CreateLobbyDocId();
let fullLobbyCode = "";

function CreateRoom() {
    const [lobbyCreatorFormValue, setLobbyCreatorFormValue] = useState('');

    const history = useHistory();

    const lobbiesRef = firestore.collection('Lobbies');

    fullLobbyCode = lobbyCode+'-'+lobbyDocId;

    const createLobby = async(e) => {
        e.preventDefault();

        await lobbiesRef.doc(fullLobbyCode).set({
            lobbyCode: lobbyCode,
            lobbyCreator: lobbyCreatorFormValue
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef);
        }).catch(function(error) {
            console.error("Error adding document: ", error);
        });

        setLobbyCreatorFormValue('');
        history.push("/Lobby/"+lobbyCode)

    }

    LobbyCodePasser(fullLobbyCode);

    return (
        <>
            <div className="center-content-screen-middle">
                <div className="row align-items-center justify-content-center">
                    <div className="col align-self-center">
                        <h1 className="font-color-theme-1 text-style-header">ConneQions</h1>
                    </div>
                </div>
                <MDBCard className="custom-border text-white bg-dark mb-3">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-2"></div>
                        <div className="col text-center">
                            <p>RoomCode: </p>
                            <MDBCardTitle>{lobbyCode}</MDBCardTitle>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <form onSubmit={createLobby}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-2"></div>
                            <div className="col">
                                <MDBInput value={lobbyCreatorFormValue} onChange={(e) => setLobbyCreatorFormValue(e.target.value)} className="input-room-code" label='Username' id='createRoomUsername' type='text' />
                            </div>
                            <div className="col-2"></div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col text-center">
                                <StyledButton buttonType={"submit"} csc={"button-join-room"} buttonText={"Create"}/>
                            </div>
                        </div>
                    </form>
                </MDBCard>
            </div>
        </>
    );
}

function CreateLobbyDocId() {
    const lobbiesRef = firestore.collection('Lobbies');
    const fullLobbyDocId = lobbiesRef.doc().id;

    return(fullLobbyDocId)
}

export function LobbyCodePasser(arg) {
    arg = fullLobbyCode;
    return (
        arg
    );
}

export default CreateRoom;