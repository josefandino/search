
import { useEffect, useState } from 'react';
import SearchBox from './components/searchBox/search-box'
import './search.css';

// import data from '../../data/users.json';

import SearchResult from './components/searchResults/searchResults';
import SearchResultsItems from './components/searchResults/searchResultsItems';
import axios from 'axios';

export default function Search() {
  
  const [isAtTop, setIsAtTop] = useState(false);
  
  // const [userData, setUsersData] = useState(data);
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // const data = await response.json();
        // Promesas
        // .then(response => response.json())
        // .then(data => {
          // setData(data);
          // console.log(data);
      // AXIOS 
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(data)
      setData(data);
        // console.log(data);
      // }
    // );
      } catch (error) {
        console.log(error)
      }
    };

    getUsers().catch(null);
  }, []);

  const handleCloseSearch = () => {
    setIsAtTop(false);
    setResults([]);
  };

  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    // if (userData?.length) {
      if (data?.length) {
      const searchTextMinus = searchText.toLocaleLowerCase();
      // const filteredData = userData.filter((value) => (   
        const filteredData = data.filter((value) => (   
          value.name.toLocaleLowerCase().includes(searchTextMinus) ||
          value.phone.toLocaleLowerCase().includes(searchTextMinus) ||
          value.email.toLocaleLowerCase().includes(searchTextMinus) ||
          value.username.toLocaleLowerCase().includes(searchTextMinus)
        )
      );
      setResults(filteredData)
      // console.log('estoy filtrando -> ', filteredData)
    }
  }
  // console.log(results)

  // const handleSearchClick = () => {
  //   setIsAtTop(!isAtTop);
  // }
  // const handleCloseClick = () => {
  //   setIsAtTop(!isAtTop);
  // }

  return (
    <div className={`search ${isAtTop ? "search-x top" : "search--center" } `}>
      {/* <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} /> */}
      <SearchBox
        onSearch={handleSearchClick}
        onClose={handleCloseSearch}
        isSearching={isAtTop}
      />
      <SearchResult
        results={results}
        isSearching={isAtTop}
      />
      
    </div>
  );
}