// Create a reference to the cities collection
// import { collection, query, where } from "firebase/firestore";
// const lobbiesRef = collection(db, "Lobbies");
//
let lobbyCode = 0;

function GenerateLobbyCode() {
    const codeNum1 = Math.floor(Math.random() * 10);
    const codeNum2 = Math.floor(Math.random() * 10);
    const codeNum3 = Math.floor(Math.random() * 10);
    const codeNum4 = Math.floor(Math.random() * 10);
    const lobbyCodeConcat = codeNum1.toString() + codeNum2.toString() + codeNum3.toString() + codeNum4.toString();
    lobbyCode = parseInt(lobbyCodeConcat);
    
    return(lobbyCode);
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
GenerateLobbyCode();
// CheckLobbyCodeIsAvailable();

