import React from 'react';
import StyledButton from "./StyledButton.component";

function LobbyRoom() {
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
                        <StyledButton csc={"button-lobby-room"} buttonText={"Create Room"}/>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col text-center">
                        <StyledButton csc={"button-lobby-room"} buttonText={"Join Room"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LobbyRoom;