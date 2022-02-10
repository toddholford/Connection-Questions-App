import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './css/index.css';
import './css/custom-bootstrap-overrides.css';
import './css/customstyles.css';
import App from './App';
// import AppTestRoom from './AppTestRoom'
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";

firebase.initializeApp({
    apiKey: "AIzaSyBGCP4JD-mPI8RaBBioqVjh1TzuiKu3EKk",
    authDomain: "conneqion.firebaseapp.com",
    projectId: "conneqion",
    storageBucket: "conneqion.appspot.com",
    messagingSenderId: "663679860058",
    appId: "1:663679860058:web:7245ac36829937a81dc763",
    measurementId: "G-BVNYR21ENQ"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<AppTestRoom />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
