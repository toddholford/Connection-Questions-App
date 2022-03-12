import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit';

import ConnectRoom from "./components/ConnectRoom.component";
import CreateRoom from "./components/CreateRoom.component";
import JoinRoom from "./components/JoinRoom.component";
import LobbyRoom from "./components/LobbyRoom.component";

function App(){

    return (
      <MDBContainer>
        <Switch>
            <Route exact path="/" component={ConnectRoom} />
            <Route path="/create" component={CreateRoom} />
            <Route path="/join" component={JoinRoom} />
            <Route path="/lobby/:id" component={LobbyRoom} />
        </Switch>
      </MDBContainer>
    )
}

export default App;
