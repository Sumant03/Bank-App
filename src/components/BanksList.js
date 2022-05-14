import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableCell,
  TableRow,
  TableBody,
  CircularProgress,
} from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
 

//All bankLists are being displayed using this functional component . It renders all details of banks in different rows . 
//If the data is not present it will redirect that bank details not found 
//Material UI TableContainer is being used to display bank details in table format 

const BanksList = (props) =>  {
  let navigate = useNavigate();
  const {
    banksList,
    loading
  } = props;

  const _onBankClick = (bank) => {
    navigate(`/bank-details/${bank.ifsc}`, {state: bank});
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: "300px", width:"80%" ,margin:"auto"}} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#4f4c4c", height: '30px' }}>
            <TableRow>
              <TableCell align="center"style={{color: "white"}}>BANK</TableCell>
              <TableCell align="center" style={{color: "white"}}>IFSC</TableCell>
              <TableCell align="center" style={{color: "white"}}>BRANCH</TableCell>
              <TableCell align="center" style={{color: "white"}}>BANK ID</TableCell>
               <TableCell align="center" style={{color: "white"}}>ADDRESS</TableCell> 
               <TableCell align="center" style={{color: "#4f4c4c"}}>addvvvvfd</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="progress"><CircularProgress /></div>
                </TableCell>
              </TableRow>
            ) : banksList.length > 0 ? (
              banksList.map((bank) => (
                <TableRow  key={bank.ifsc} className="row" onClick={(e) => {
                    if (e.target.className.includes("column")) {
                      _onBankClick(bank)
                    }
                  }}
                  >
                
                  <TableCell align="center" width="150" className="column">
                    {bank.bank_name}
                    
                  </TableCell>
                  <TableCell align="center" width="120" className="column">
                    {bank.ifsc}
                  </TableCell>
                  <TableCell align="center" width="150" className="column">
                    {bank.branch}
                  </TableCell>
                  <TableCell align="center" width="50" className="column" >
                    {bank.bank_id}
                  </TableCell>
                  <TableCell align="center" className="column">
                    {bank.address}
                  </TableCell>
                  <TableCell align="center" className="column">
                    <div>
                  <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} 
                                  checkedIcon={<Favorite />}
                          name="checkedH" />}
                      />
                      </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="error">
                   No such Bank exist , please fill correct details
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default BanksList;

