import React from "react";
import {Pagination as PaginationComponent} from "@material-ui/lab";

//This functional component is used to add pagination functionality in the application  .

// It takes total banks as the props and displays as per the value 
// per page provided by the user in the bottom text box filed


const Pagination = (props) => {
  const {
    totalLength,
    paginate
  } = props;

  const count = Math.ceil(totalLength / 10);

  return (
    <>
      <PaginationComponent
        count={count}
        color="primary"
        onChange={(event, value) => {
          paginate(value);
        }}
      />
    </>
  );
}

export default Pagination;
