// Create a reference to the cities collection
// import { collection, query, where } from "firebase/firestore";
// const lobbiesRef = collection(db, "Lobbies");
//
let lobbyCode = 0;
let codeNum1 = 0;
let codeNum2 = 0;
let codeNum3 = 0;
let codeNum4 = 0;

export function GenerateLobbyCode() {
    codeNum1 = Math.floor(Math.random() * 10);
    codeNum2 = Math.floor(Math.random() * 10);
    codeNum3 = Math.floor(Math.random() * 10);
    codeNum4 = Math.floor(Math.random() * 10);
    const lobbyCodeConcat = codeNum1.toString() + codeNum2.toString() + codeNum3.toString() + codeNum4.toString();
    lobbyCode = parseInt(lobbyCodeConcat);
    
    return(lobbyCodeConcat);
}

// function CheckLobbyCodeIsAvailable(LobbyCode) {
//
//     const q = query(lobbiesRef, where("lobbyCode", "==", LobbyCode));
//    
//     if (q.isEqual(null)){
//        
//     }
//    
// }
//
// GenerateLobbyCode();
// CheckLobbyCodeIsAvailable();

export default GenerateLobbyCode();