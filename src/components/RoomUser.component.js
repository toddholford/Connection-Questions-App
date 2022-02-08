import React from 'react';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import UserColorIndicator from "./UserColorIndicator.component";

function RoomUser(props) {
    return (
        <MDBCard className="custom-border text-white bg-dark mb-3">
            <MDBCardBody>
                {props.username}
                <UserColorIndicator csc={props.csc}/>
            </MDBCardBody>
        </MDBCard>
    );
}

export default RoomUser;