import React,  { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SearchArea from './components/searchArea';
import Results from './components/results';
import getSearchResults from './components/SearchQuery';

const useStyles = makeStyles({
  body: {
    marginLeft: '0',
    marginRight: '0'
  },
  results: {
    display: 'flex',
    overflowX: 'auto'
  },
});

const App = () => {
  const classes = useStyles();
  const body = document.body;
  body.classList.add(classes.body);
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  const [token, setToken] = useState('');
  const getData = (searchQuery) => {
    getSearchResults(searchQuery).then(
      result => {
        setData(result.items);
        setToken(result.nextPageToken);
        setQuery(searchQuery);
      }
    );
  };

  const getNextPage = () => {
    getSearchResults(query, token).then(
      result => {
        setData({});
        setData(result.items);
        setToken(result.nextPageToken)
      }
    );
  }

  return (
    <>
      <SearchArea onChange={getData}/>
      <Results data={data} className={classes.results} onScrollEnd={getNextPage} />
    </>
  );
}

const AppW = () => <App />;

export default AppW;
