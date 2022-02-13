import React, {useRef, useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit';
import firebase from "firebase/compat/app";
import {doc, collection, addDoc, getFirestore, documentId} from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { GenerateLobbyCode } from "./js/LobbyCodeGenerator"

async function AppTestRoom() {

    // const writeNewLobby = async (e) => {
    //
    //     const docRef = addDoc(collection(db, "Lobbies"), {
    //         lobbyCode: GenerateLobbyCode(),
    //         lobbyCreator: "Bobby J",
    //         lobbyJoiner: ""
    //     });
    //     collection(db, {docRef} + "/LobbyQuestions");
    // }

    // doc.ref.collection('LobbyQuestions')


    // QUERY TO DELETE LOBBIES
    // const lobbies_query = db.collection('Lobbies').where('lobbyCode','!=',1234);
    // lobbies_query.get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         doc.ref.delete().then(r => {});
    //     });
    // });
    
    return (
        <div>
            <h1>React & Firebase</h1>
            <h2>By @farazamiruddin</h2>
            {/*<button onClick={await lobbies_query} type={"button"}></button>*/}
        </div>
    );

    // const [user] = useAuthState(auth);
    // return (
    //     <MDBContainer>
    //         <Router>
    //             <Routes>
    //                 <Route path="/create" element={<CreateRoom />} />
    //                 {/*<Route path="/join" element={<JoinRoom />} />*/}
    //                 {/*<Route path="/lobby:id" element={<LobbyRoom />} />*/}
    //                 {/*<Route path="/" element={<ConnectRoom />} />*/}
    //                 <Route path="/" element={<TestRoom1 />} />
    //             </Routes>
    //         </Router>
    //     </MDBContainer>
    // );
}





























//sign in will be apart of connectroom or createroom
// function SignIn() {
//     signInAnonymously(auth)
//         .then(() => {
//             console.log("sign in")
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log("error signing in")
//         });
//
//     return(
//         <button onClick={signInAnonymously}>Sign in anonymously</button>
//     )
// }

//need to figure out how to set signout upon closing site
// function SignOut() {
//     return auth.currentUser && (
//         auth.signOut()
//     )
// }

//chatroom is actually lobbyroom
// function ChatRoom() {
//    
//     const lobbiesRef = firestore.collection('Lobbies');
//
//     const sendMessage = async(e) => {
//         const { uid } = auth.currentUser;
//
//         await lobbiesRef.add({
//             // lobbyCode: GenerateLobbyCode(),
//             lobbyCode: 1234,
//             // lobbyCreatorId: uid,
//             lobbyCreator: "Todd",
//             lobbyJoiner: ""
//         });
//         console.log("createLobby ran")
//     }
//
//     return(
//         <>
//             <div>
//                 {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
//
//                 <div ref={dummy}></div>
//
//             </div>
//
//             <form onSubmit={sendMessage}>
//
//                 <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
//
//                 <button type={"submit"}>click</button>
//
//             </form>
//         </>
//     )
// }

//chatmessage will be questionnaireresponsebox or questionnaireresponse or both
// function ChatMessage(props) {
//     const { text, uid } = props.message;
//
//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
//
//     return (
//         <div className={`message ${messageClass}`}>
//             <p>{text}</p>
//         </div>
//     )
// }

export default AppTestRoom;