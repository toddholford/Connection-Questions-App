// import React from 'react';
// import {
//     MDBBtn,
//     MDBInput,
//     MDBModal, MDBModalBody,
//     MDBModalContent,
//     MDBModalDialog, MDBModalFooter,
//     MDBModalHeader,
//     MDBModalTitle
// } from "mdb-react-ui-kit";
// import StyledButton from "./StyledButton.component";
//
// function QuestionReplyModal(props) {
//     return (
//         <MDBModal className='bg-primary' tabIndex='-1' show={props.show} setShow={props.setShow}>
//             <MDBModalDialog centered>
//                 <MDBModalContent className={"bg-dark custom-border"}>
//                     <MDBModalHeader>
//                         <MDBModalTitle>What did you usually get in trouble for as a kid?</MDBModalTitle>
//                         <MDBBtn className='btn-close' color='none' onClick={props.onClick}></MDBBtn>
//                     </MDBModalHeader>
//                     <MDBModalBody>
//                         <MDBInput className="input-room-code" label='Type your answer here...' textarea rows={8} />
//                     </MDBModalBody>
//                     <MDBModalFooter>
//                         <StyledButton buttonText={"Answer Question"} />
//                     </MDBModalFooter>
//                 </MDBModalContent>
//             </MDBModalDialog>
//         </MDBModal>
//     );
// }
//
// export default QuestionReplyModal;