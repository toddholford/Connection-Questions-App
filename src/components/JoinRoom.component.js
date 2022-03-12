import React, {useState} from 'react';
import {MDBCard, MDBInput} from 'mdb-react-ui-kit';
import {useHistory} from "react-router-dom";
import StyledButton from "./StyledButton.component";
import firebase from "../config/firebase";

const firestore = firebase.firestore();

let fullLobbyCode;

function JoinRoom() {

    const [joinLobbyCodeFormValue, setJoinLobbyCodeFormValue] = useState('');
    const [guestTwoFormValue, setGuestTwoFormValue] = useState('');

    const history = useHistory();

    const lobbiesRef = firestore.collection('Lobbies');

    // const findLobbyId = async() => {
    //
    //     const q = query(lobbiesRef, where("lobbyCode", "==", joinLobbyCodeFormValue));
    //
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         fullLobbyCode = doc.id;
    //     });
    // }

    const joinLobbyWithCode = async(e) => {
        e.preventDefault();

        const q = firestore.query(lobbiesRef, firestore.where("lobbyCode", "==", joinLobbyCodeFormValue));

        const querySnapshot = await firestore.getDocs(q);
        querySnapshot.forEach((doc) => {
            fullLobbyCode = doc.id;
        });

        if (fullLobbyCode != null){
            await lobbiesRef.doc(fullLobbyCode).set({
                lobbyGuestTwo: guestTwoFormValue
            })
            //     .then(function(docRef) {
            //     console.log("Document written with ID: ", docRef);
            // }).catch(function(error) {
            //     console.error("Error adding document: ", error);
            // });
        }

        setGuestTwoFormValue('');
        history.push("/Lobby/"+joinLobbyCodeFormValue)

    }

    return (
        <>
            <div className="center-content-screen-middle">
                <div className="row align-items-center justify-content-center">
                    <div className="col align-self-center">
                        <h1 className="font-color-theme-1 text-style-header">ConneQions</h1>
                    </div>
                </div>
                <MDBCard className="custom-border text-white bg-dark mb-3">
                    <form onSubmit={joinLobbyWithCode}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-2"></div>
                            <div className="col">
                                <MDBInput value={joinLobbyCodeFormValue} onChange={(e) => setJoinLobbyCodeFormValue(e.target.value)} className="input-room-code" label='Room Code' id='form2' type='text' />
                            </div>
                            <div className="col-2"></div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-2"></div>
                            <div className="col">
                                <MDBInput value={guestTwoFormValue} onChange={(e) => setGuestTwoFormValue(e.target.value)} className="input-room-code" label='Username' id='form1' type='text' />
                            </div>
                            <div className="col-2"></div>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <div className="col text-center">
                                <StyledButton buttonType={"submit"} csc={"button-join-room"} buttonText={"Join"} />
                            </div>
                        </div>
                    </form>
                </MDBCard>
            </div>
        </>
    );
}



export default JoinRoom;