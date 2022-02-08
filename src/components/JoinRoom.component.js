import React from 'react';
import {MDBCard, MDBInput} from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import StyledButton from "./StyledButton.component";

function JoinRoom() {
    return (
        <div>
            <div className="center-content-screen-middle">
                <div className="row align-items-center justify-content-center">
                    <div className="col align-self-center">
                        <h1 className="font-color-theme-1 text-style-header">ConneQions</h1>
                    </div>
                </div>
                <MDBCard className="custom-border text-white bg-dark mb-3">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-2"></div>
                        <div className="col">
                            <MDBInput className="input-room-code" label='Username' id='form1' type='text' />
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-2"></div>
                        <div className="col">
                            <MDBInput className="input-room-code" label='Room Code' id='form2' type='text' />
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col text-center">
                            <Link to="/lobby:id">
                                <StyledButton csc={"button-join-room"} buttonText={"Join"} />
                            </Link>
                        </div>
                    </div>
                </MDBCard>
            </div>
        </div>
    );
}

export default JoinRoom;