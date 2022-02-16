import React, {useState} from "react";

import firebase from "./config/firebase";

import { useCollectionData } from "react-firebase-hooks/firestore";
import QuestionnaireResponseBox from "./components/QuestionnaireResponseBox.component";
import {GenerateLobbyCode} from "./js/LobbyCodeGenerator";
import RoomUser from "./components/RoomUser.component";
import Questionnaire from "./components/Questionnaire.component";
import LobbyRoom from "./components/LobbyRoom.component";
import {MDBContainer} from "mdb-react-ui-kit";
// Needed for User Auth
// const auth = firebase.auth();

// Possible analytics from firebase
// const analytics = firebase.analytics();

const firestore = firebase.firestore();

function AppTestRoom() {
    
    // Needed for User Auth
    // const [user] = useAuthState(auth);
    
    return (
        <MDBContainer>
            {/*<section>*/}
            {/*    /!*How to switch rooms based on if user has signed in*!/*/}
            {/*    /!*{user ? <PracticeLobbyRoom /> : <SignIn />}*!/*/}
            {/*    /!*<PracticeLobbyRoom />*!/*/}
            {/*</section>*/}
            
            <LobbyRoom />
        </MDBContainer>
    );

}

// function PracticeLobbyRoom() {
//
//     const lobbyCode = GenerateLobbyCode();
//
//     // used to scrolled down
//     // const dummy = useRef();
//
//     const lobbiesRef = firestore.collection('Lobbies')
//    
//     const query = lobbiesRef.orderBy('createdAt').limit(25);
//    
//     const [messages] = useCollectionData(query, {idField: 'id'});
//    
//     const [formValue, setFormValue] = useState('');
//    
//     const sendMessage = async(e) => {
//         //keeps the page from refreshing
//         e.preventDefault();
//         // Needed for User Auth
//         // const { uid } = auth.currentUser;
//
//         await lobbiesRef.add({
//            text: formValue,
//            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//         }).then(function(docRef) {
//             console.log("Document written with ID: ", docRef.id);
//         }).catch(function(error) {
//             console.error("Error adding document: ", error);
//         });
//
//         setFormValue('');
//        
//         //used to auto scroll down
//         // dummy.current.scrollIntoView({ behavior: 'smooth' });
//     }
//    
//     return(
//         <>
//             <div>
//                 {messages && messages.map(msg => <PracticeQuestionnaireResponseBox key={msg.id} message={msg}/>)}
//
//                 {/*used to auto scroll down*/}
//                 {/*<span ref={dummy}></span>*/}
//
//             </div>
//
//             <div>
//                 <div className="row align-items-center justify-content-center center-content-screen-top">
//                     <div className="col align-self-center">
//                         <h1 className="font-color-theme-1 text-style-subheader">ConneQions</h1>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className="row">
//                     <div className="col">
//                         <RoomUser username={"User 1"} csc={"position-absolute p-2 rounded-circle"}/>
//                     </div>
//                     <div className="col-2">{props.lobbyCode}</div>
//                     <div className="col">
//                         <RoomUser username={"User 2"} csc={"position-absolute p-2 rounded-circle"}/>
//                     </div>
//                 </div>
//             </div>
//             <Questionnaire />
//             <div>
//                 <QuestionnaireResponseBox />
//             </div>
//
//             <form onSubmit={sendMessage}>
//                 <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
//                 <button type="submit">Click Me</button>
//             </form>
//         </>
//     )
//    
// }
//
// function PracticeQuestionnaireResponseBox(props) {
//    
//     const { text } = props.message;
//
//     // used to identify sent or received messages
//     // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
//
//     return (
//         // alternate div for using sent or received message class
//         // <div className={`message ${messageClass}`}>
//         <div>
//             <p>{text}</p>
//         </div>
//     )
//    
// }

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

export default AppTestRoom;
