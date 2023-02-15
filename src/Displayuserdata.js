import React from 'react';
import "./Displayuserdetail.css";
const Displayuserdata = (props) => {
  return (
    <div className='displayUserData'>
        
       <div> {props.data.firstName}</div>
       <div> {props.data.lastName}</div>
       <div> {props.data.email}</div>
    
       <div> {props.data.address}</div>
       <div> {props.data.age}</div>
       <div> {props.data.marritalstatus}</div>
        </div>
  )
}

export default Displayuserdata