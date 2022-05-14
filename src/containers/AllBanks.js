import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchFilter from '../components/SearchFilter';
import BanksList from '../components/BanksList';
import Pagination from '../components/Pagination';
import Favourite from '../components/Favourite';
import '../App.css';

const AllBanks = () => {
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState("MUMBAI");    // default city
    const [category, setCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [val,setVal]=useState(10);
    const [bankList, setBankList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [paginatedList, setPaginatedList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {

      (bankList);
      if (searchQuery !== "" && category !=="") {
        setFilteredList(
          bankList.filter((bank) => {
            return bank[category].toLowerCase().startsWith(searchQuery.toLowerCase());
          })
        );
      }
    }, [bankList, category, searchQuery]);



    useEffect(() => {
      setLoading(true)
        axios.get(
          `https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`,
        )
        .then((resp) => {
            setBankList(resp.data)
            setFilteredList(resp.data)
            setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });

    }, [city])

    useEffect(() => {
        setFilteredList(bankList);
        if (searchQuery !== "" && category !=="") {
          setFilteredList(
            bankList.filter((bank) => {
              return bank[category].toLowerCase().startsWith(searchQuery.toLowerCase());
            })
          );
        }
      }, [bankList, category, searchQuery]);


    useEffect(() => {
      // setVal(val)
        const lastPageIndex = currentPage *val;   //  Number of banks on each page : default 10 //
        const firstPageIndex = lastPageIndex - val;
        const modilyList = filteredList.slice(firstPageIndex, lastPageIndex);
        setPaginatedList(modilyList);
      }, [filteredList, currentPage,val]);

    // console.log(filteredList.push({istrue:false}));

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

   return (
    <div className="allBanksContainer">
        <div className="searchFilter" >
        <div className="heading" style={{display:"flex" ,paddingRight:"20px"}}>
          <div style={{display:"flex" ,paddingRight:"20px"}}>Home</div> 
          <div className="banksList"><Link to="/favourite ||/all-banks" style={{textDecoration:'none',color:'black'}}>Favourite</Link>
           {/* <Favourite
           banksList={paginatedList}
           loading={loading}
           /> */}
           </div>
        </div>
          <SearchFilter
           city={city}
           category={category}
           selectedCity={setCity}
           selectedCategory={setCategory}
           selectedSearchQuery={setSearchQuery}    
          />
        </div>




        <div className="banksList">
          <BanksList
           banksList={paginatedList}
           loading={loading}
           />
        </div>
        <div style={{display:"flex"}}>
        <div className="pagination" align="center">
          <Pagination
          
            totalLength={filteredList.length}
            paginate={paginate}
          />
        </div>
        <div>Enter Pages to Display</div>
         <div align="center"><input type="text" onKeyUp={(e)=> {if(e.key=="Enter"){
           setVal(e.target.value)}
         }}/></div>
        </div>
    </div>
  );
}

export default AllBanks;
