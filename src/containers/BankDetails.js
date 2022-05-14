import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";


//This functional component is used to display bank deatils of a particular selected bank .
// Whenever the user clicks the bank , it will display all the details of bank .


const BankDetails = () => {
  const [details, setDetails] = useState({})
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setDetails(location.state);
  }, [location])


  const _onBackClick = () => {
    navigate(-1);
  }

  return (
    <div className="detailsContainer" style={{border:"3px solid black" ,width:"40%",margin:"auto"} } >
     <div className="bankHeading">
       <div>
         <h3><bold>Bank Details</bold></h3>
       </div>
      <div  align="left"className="backArrow" onClick={_onBackClick}><ArrowBack/></div>
      back
     </div>

     <div className="text"align="left" style={{fontSize:"20px"}}>
      Bank Name : {details.bank_name}
     </div>
     <div className="text" align="left" style={{fontSize:"20px"}}>
      Branch Name : {details.branch}
     </div>
     <div align="left" className="text" style={{fontSize:"20px"}}>
      City : {details.city}
     </div>
     <div className="text" align="left" style={{fontSize:"20px"}}>
      District : {details.district}
     </div>
     <div className="text" align="left" style={{fontSize:"20px"}} >
      IFSC : {details.ifsc}
     </div>
     <div className="text" align="left" style={{fontSize:"20px"}}>
      State : {details.state}
      </div> 
      <div className="text"  align="left" margin="20px">
     <p style={{fontSize:"20px"}}>Bank Address : {details.address}</p> 
     </div>  
    </div>
     
  );
}

export default BankDetails;
