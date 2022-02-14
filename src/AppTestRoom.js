import React, {useState} from "react";

import firebase from "./config/firebase";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// Needed for User Auth
// const auth = firebase.auth();

// Possible analytics from firebase
// const analytics = firebase.analytics();

const firestore = firebase.firestore();

function AppTestRoom() {

    // Needed for User Auth
    // const [user] = useAuthState(auth);
    
    return (
        <div className="App">
            <header>
                
            </header>         
            
            <section>
                {/*How to switch rooms based on if user has signed in*/}
                {/*{user ? <PracticeLobbyRoom /> : <SignIn />}*/}
                <PracticeLobbyRoom />
            </section>
        </div>
    );

}

function PracticeLobbyRoom() {

    // used to scrolled down
    // const dummy = useRef();

    const messagesRef = firestore.collection('Lobbies')
    const query = messagesRef.orderBy('createdAt').limit(25);
    
    const [messages] = useCollectionData(query, {idField: 'id'});
    
    const [formValue, setFormValue] = useState('');
    
    const sendMessage = async(e) => {
        //keeps the page from refreshing
        e.preventDefault();
        
        // Needed for User Auth
        // const { uid } = auth.currentUser;

        await messagesRef.add({
           text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        setFormValue('');
        
        //used to auto scroll down
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    return(
        <>
            <div>
                {messages && messages.map(msg => <PracticeQuestionnaireResponseBox key={msg.id} message={msg}/>)}

                {/*used to auto scroll down*/}
                {/*<span ref={dummy}></span>*/}

            </div>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
                <button type="submit">Click Me</button>
            </form>
        </>
    )
    
}

function PracticeQuestionnaireResponseBox(props) {
    
    const { text } = props.message;

    // used to identify sent or received messages
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        // alternate div for using sent or received message class
        // <div className={`message ${messageClass}`}>
        <div>
            <p>{text}</p>
        </div>
    )
    
}

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
