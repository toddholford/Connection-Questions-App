// Create a reference to the cities collection
// import { collection, query, where } from "firebase/firestore";
// const lobbiesRef = collection(db, "Lobbies");
//
// let lobbyCode = 0;
//
// let codeNum1 = 0;
// let codeNum2 = 0;
// let codeNum3 = 0;
// let codeNum4 = 0;

let codeLetter1 = "";
let codeLetter2 = "";
let codeLetter3 = "";
let codeLetter4 = "";

export function GenerateLobbyCode() {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    codeLetter1 = alphabet[Math.floor(Math.random() * alphabet.length)];
    codeLetter2 = alphabet[Math.floor(Math.random() * alphabet.length)];
    codeLetter3 = alphabet[Math.floor(Math.random() * alphabet.length)];
    codeLetter4 = alphabet[Math.floor(Math.random() * alphabet.length)];
    const fullLobbyCode = codeLetter1 + codeLetter2 + codeLetter3 + codeLetter4;
    return(fullLobbyCode);

    // codeNum1 = Math.floor(Math.random() * 10);
    // codeNum2 = Math.floor(Math.random() * 10);
    // codeNum3 = Math.floor(Math.random() * 10);
    // codeNum4 = Math.floor(Math.random() * 10);
    // const lobbyCodeConcat = codeNum1.toString() + codeNum2.toString() + codeNum3.toString() + codeNum4.toString();
    // lobbyCode = parseInt(lobbyCodeConcat);
    //
    // return(lobbyCodeConcat);
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