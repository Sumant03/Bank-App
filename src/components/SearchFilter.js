import React, {useCallback} from "react";

import { 
  FormControl,
  InputLabel,
  Select,
  MenuItem, 
  TextField, 
  Tooltip
} from "@material-ui/core";

//This functional component is used to implement search functionalty based on the category and query provided by the user.


// It takes 
//1.category 
//2.query(data) 
//display bank details in corresponds to the data provided  


//There are various cities,categories options provided to the user .

const SearchFilter = (props) => {
  const {
    city,
    category,
    selectedCity,
    selectedCategory,
    selectedSearchQuery
  } = props;

//This is a Debounce function which is being implemented to reduce the query search 
//It will only process the request  after the interval of time specified 

  const debouncedFunc = (func, time) => {   // debounce function for search query // 
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, time);
    };
  };

  const _setData = (value) => {
    selectedSearchQuery(value)
  }

  //Debounce function is being called from here .
  const betterFunc = useCallback(debouncedFunc(_setData, 2000), []);  // added useCallback to memoize function //

  const _onChangeCity = (e) => {
    selectedCity(e.target.value);
  }

  const _onChangeCategory = (e) => {
    selectedCategory(e.target.value)
  }


  return (
    <>
     <div className="searchFilterContainer">
        <FormControl
            variant="outlined"
            style={{ 
              minWidth: 150, 
              marginRight: "30px" 
            }}
          >
            <InputLabel id="select-city-label">Select city</InputLabel>
            <Select
              labelId="select-city-label"
              id="select-city"
              label="Select city"
              value={city}
              onChange={_onChangeCity}
            >
            
              <MenuItem value={"DELHI"}>DELHI</MenuItem>
              <MenuItem value={"PUNE"}>PUNE</MenuItem>
              <MenuItem value={"LUCKNOW"}>LUCKNOW</MenuItem>
              <MenuItem value={"MUMBAI"}>MUMBAI</MenuItem>
              <MenuItem value={"HYDERABAD"}>HYDERABAD</MenuItem>
            </Select>
          </FormControl>
        <FormControl
            variant="outlined"
            style={{ 
              minWidth: 150, 
              marginRight: "30px" 
            }}
          >
          
            <InputLabel id="select-category-label">Select Category</InputLabel>
            <Select
              labelId="select-category-label"
              id="select-category"
              label="Select category"
              value={category}
              onChange={_onChangeCategory}
            >

              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"bank_name"}>Bank Name</MenuItem>
              <MenuItem value={"ifsc"}>IFSC</MenuItem>
              <MenuItem value={"branch"}>Branch Name</MenuItem>
            </Select>
          </FormControl>
          <Tooltip >
          <div className="searchBar">
              <TextField
                disabled={!category}
                fullWidth
                onKeyUp={(e) => {betterFunc(e.target.value)}}
                label="Search"
                variant="outlined"
              />
            </div>
          </Tooltip>
     </div>
    </>
  );
}

export default SearchFilter;
