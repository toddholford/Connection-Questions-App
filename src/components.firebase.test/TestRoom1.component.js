import React from "react";
// import {Link} from "react-router-dom";
// import StyledButton from "../components/StyledButton.component";
// import GenerateLobbyCode from "../js/LobbyCodeGenerator"

// const auth = getAuth();

//M1
// const lobbiesRef = firestore.collection('Lobbies');
//M2
// const lobbiesCollection = collection(firestore, 'Lobbies');

//M1
// const createLobbyM1 = async(e) => {
//
//     e.preventDefault();
//
//     const { uid } = auth.currentUser;
//
//     await lobbiesRef.add({
//         lobbyCode: GenerateLobbyCode(),
//         lobbyCreatorId: uid,
//         lobbyCreator: ""
//     });
//     console.log("M1 createLobby ran")
}

//M2
// async function createLobbyM2() {
//     const lobbiesCollection = collection(firestore, 'Lobbies');
//
//     const newDoc = await addDoc(lobbiesCollection, {
//         lobbyCode: 1234,
//         lobbyCreator: "Todd",
//         lobbyJoiner: ""
//     });
//     console.log(`M2 your doc was created at ${newDoc.path}`);
// }
//
// function TestRoom1() {
//    
//     return (
//         <>
//             <div className="center-content-screen-middle">
//                 <div className="row align-items-center justify-content-center">
//                     <div className="col align-self-center">
//                         <h1 className="font-color-theme-1 text-style-header">ConneQions</h1>
//                     </div>
//                 </div>
//                 <div className="row align-items-center justify-content-center">
//                     <div className="col text-center">
//                         <Link to="/create">
//                             <StyledButton onClick={createLobbyM2()} csc={"button-connect-room"} buttonText={"Create Room"} />
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="row align-items-center justify-content-center">
//                     <div className="col text-center">
//                         <Link to="/join">
//                             <StyledButton csc={"button-connect-room"} buttonText={"Join Room"} />
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

function TestRoom1() {
    render(
        
    )
}

//add sign in function here

export default TestRoom1;