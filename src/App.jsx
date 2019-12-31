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
});

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const search = (searchQuery) => {
    getSearchResults(searchQuery).then(
      result => {
        setData(result.items);
      }
    );
  }

  const body = document.querySelector('body');
  body.classList.add(classes.body);

  return (
    <>
      <SearchArea onChange={search}/>
      <Results data={data} />
    </>
  );
}

const AppW = () => <App />;

export default AppW;
