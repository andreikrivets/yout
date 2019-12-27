import React,  { useState }  from 'react';
import SearchArea from './components/searchArea';
import Results from './components/results';
import getSearchResults from './components/SearchQuery';

const App = () => {
  const [data, setData] = useState({});
  const search = (searchQuery) => {
    getSearchResults(searchQuery).then(
      result => {
        setData(result.items);
      }
    );
  }
  return (
    <>
      <SearchArea onChange={search}/>
      <Results data={data} />
    </>
  );
}

const AppW = () => <App />;

export default AppW;
