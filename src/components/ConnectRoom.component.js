import React from 'react';
import {Link} from "react-router-dom";
import StyledButton from "./StyledButton.component";
// import {GenerateLobbyCode} from "../js/LobbyCodeGenerator";

// const lobbyId = GenerateLobbyCode;
//
// generatePath("/lobby/:id", {
//     id: lobbyId
// });

function ConnectRoom() {

    return (
        <div>
            <div className="center-content-screen-middle">
                <div className="row align-items-center justify-content-center">
                    <div className="col align-self-center">
                        <h1 className="font-color-theme-1 text-style-header">ConneQions</h1>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col text-center">
                        <Link to="/create">
                            <StyledButton csc={"button-connect-room"} buttonText={"Create Room"} />
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
        </div>
    );
}

//add sign in function here

export default ConnectRoom;