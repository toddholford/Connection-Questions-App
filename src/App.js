import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit';

import ConnectRoom from "./components/ConnectRoom.component";
import CreateRoom from "./components/CreateRoom.component";
import JoinRoom from "./components/JoinRoom.component";
import LobbyRoom from "./components/LobbyRoom.component";

function App(){
  return (
      <MDBContainer>
        <Router>
            <Routes>
                <Route path="/create" element={<CreateRoom />} />
                <Route path="/join" element={<JoinRoom />} />
                <Route path="/lobby:id" element={<LobbyRoom />} />
                <Route path="/" element={<ConnectRoom />} />
            </Routes>
        </Router>
      </MDBContainer>
  )
}

export default App;
