import React, {useState} from 'react';
import firebase from "../../config/firebase";

import RoomUser from "../RoomUser.component";
import TestQuestionnaire from "./TestQuestionnaire";

const firestore = firebase.firestore();

function TestLobbyRoom() {
    return (
        <div>
            <div>
                <div className="row align-items-center justify-content-center center-content-screen-top">
                    <div className="col align-self-center">
                        <h1 className="font-color-theme-1 text-style-subheader">ConneQions</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="row">
                    <div className="col">
                        <RoomUser username={"User 1"} csc={"position-absolute p-2 rounded-circle"}/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col">
                        <RoomUser username={"User 2"} csc={"position-absolute p-2 rounded-circle"}/>
                    </div>
                </div>
            </div>
            <TestQuestionnaire />
        </div>
    );
}

export default TestLobbyRoom;