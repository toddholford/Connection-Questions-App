import React, {useState} from 'react';
import {Link} from "react-router-dom";
import StyledButton from "./StyledButton.component";
import GenerateLobbyCode from "../js/LobbyCodeGenerator"
import firebase from "firebase/app";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "@firebase/firestore/dist/firestore/test/util/api_helpers";

function TestRoom1() {

    const lobbiesRef = firestore.collection('Lobbies');
    // const query = lobbiesRef.orderBy('createdAt').limit(100);

    const createLobby = async(e) => {

        // e.preventDefault();

        const { uid } = auth.currentUser;

        await lobbiesRef.add({
            lobbyCode: GenerateLobbyCode(),
            lobbyCreatorId: uid,
            lobbyCreator: "",
            lobbyJoinerId: "",
            lobbyJoiner: ""
        });
    }
    
    return (
        <>
            <div className="center-content-screen-middle">
                <div className="row align-items-center justify-content-center">
                    <div className="col align-self-center">
                        <h1 className="font-color-theme-1 text-style-header">ConneQions</h1>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col text-center">
                        <Link to="/create">
                            <StyledButton onClick={createLobby()} csc={"button-connect-room"} buttonText={"Create Room"} />
                        </Link>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col text-center">
                        <Link to="/join">
                            <StyledButton csc={"button-connect-room"} buttonText={"Join Room"} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

//add sign in function here

export default TestRoom1;