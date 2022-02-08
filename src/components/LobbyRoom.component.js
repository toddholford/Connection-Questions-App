import React from 'react';
import RoomUser from "./RoomUser.component";
import Questionnaire from "./Questionnaire.component";
import QuestionnaireResponseBox from "./QuestionnaireResponseBox.component";

function LobbyRoom() {
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
            <Questionnaire />
            <QuestionnaireResponseBox />
        </div>
    );
}

export default LobbyRoom;

