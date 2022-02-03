import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { MDBContainer } from 'mdb-react-ui-kit';

// import CreateRoom from "./components/CreateRoom.component";
// import JoinRoom from "./components/JoinRoom.component";
import ConnectRoom from "./components/ConnectRoom.component";

function App() {
  return (
      <MDBContainer>
        <Router>
          <div>
            <Routes>
              {/*<Route path="/create" element={<CreateRoom />} />*/}
              {/*<Route path="/join" element={<JoinRoom />} />*/}
              <Route path="/" element={<ConnectRoom />} />
            </Routes>
          </div>
        </Router>
      </MDBContainer>
  );
}

export default App;
