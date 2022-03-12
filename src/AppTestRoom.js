// import React, {useState} from "react";
// import firebase from "./config/firebase";

import {MDBContainer} from "mdb-react-ui-kit";
import TestLobbyRoom from "./components/testFiles/TestLobbyRoom";
import TestQuestionnaire from "./components/testFiles/TestQuestionnaire";

function AppTestRoom() {

    return (
        <MDBContainer>
            <TestLobbyRoom />
        </MDBContainer>
    );

}

export default AppTestRoom;






























// function SignIn() {
//
//     const signInWithGoogle = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         auth.signInWithPopup(provider);
//     }
//
//     return (
//         <>
//             <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//             <p>Do not violate the community guidelines or you will be banned for life!</p>
//         </>
//     )
//
// }
//
// function SignOut() {
//     return auth.currentUser && (
//         <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//     )
// }


