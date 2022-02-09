import React, {useRef, useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit';
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { signInAnonymously } from "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import ConnectRoom from "./components/ConnectRoom.component";
import CreateRoom from "./components/CreateRoom.component";
import JoinRoom from "./components/JoinRoom.component";
import LobbyRoom from "./components/LobbyRoom.component";
import {useAuthState} from "react-firebase-hooks/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBGCP4JD-mPI8RaBBioqVjh1TzuiKu3EKk",
    authDomain: "conneqion.firebaseapp.com",
    projectId: "conneqion",
    storageBucket: "conneqion.appspot.com",
    messagingSenderId: "663679860058",
    appId: "1:663679860058:web:7245ac36829937a81dc763",
    measurementId: "G-BVNYR21ENQ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
    const [user] = useAuthState(auth);

    return (
        <MDBContainer>

            <section>
                {user ? <LobbyRoom/> : <ConnectRoom/>}
            </section>

            <Router>
                <Routes>
                    <Route path="/create" element={<CreateRoom />} />
                    <Route path="/join" element={<JoinRoom />} />
                    <Route path="/lobby:id" element={<LobbyRoom />} />
                    <Route path="/" element={<ConnectRoom />} />
                </Routes>
            </Router>
        </MDBContainer>
    );
}

//sign in will be apart of connectroom or createroom
function SignIn() {
    signInAnonymously(auth)
        .then(() => {
            console.log("sign in")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error signing in")
        });

    return(
        <button onClick={signInAnonymously}>Sign in anonymously</button>
    )
}

//need to figure out how to set signout upon closing site
function SignOut() {
    return auth.currentUser && (
        auth.signOut()
    )
}

//chatroom is actually lobbyroom
function ChatRoom() {

    const dummy = useRef();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(100);

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {

        e.preventDefault();

        const { uid } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        });

        setFormValue('');

        dummy.current.scrollIntoView({ behavior: 'smooth' });

    }

    return(
        <>
            <div>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

                <div ref={dummy}></div>

            </div>

            <form onSubmit={sendMessage}>

                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>

                <button type={"submit"}>click</button>

            </form>
        </>
    )
}

//chatmessage will be questionnaireresponsebox or questionnaireresponse or both
function ChatMessage(props) {
    const { text, uid } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <p>{text}</p>
        </div>
    )
}

export default App;