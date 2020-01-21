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

const events = (cls) => {
  console.log('rap');
  const wheelEvent = (e) => {
    const results = document.querySelector(`.${cls}`);
    let width = getComputedStyle(results).width;
    width = +width.slice(0, width.length-2);
    e = e || window.event;
    const delta = Math.sign(e.deltaY || e.detail || e.wheelDelta);
    const childComputedStyle = window.getComputedStyle(results.childNodes[1]);
    const blockWidth = childComputedStyle.width;
    const margin = childComputedStyle.marginInlineStart;
    const offset = +blockWidth.slice(0, blockWidth.length-2) + +margin.slice(0, margin.length-2);
    results.scrollBy((delta * offset) + 1, 0);
    console.log(results.scrollLeft, width);
    if (width <= 0.75 * results.scrollLeft) {
      console.log('re-query');
    }
  };
  document.addEventListener('wheel', wheelEvent);
  document.addEventListener('mousewheel', wheelEvent)
}


const App = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [token, setToken] = useState('');
  const [query, setQuery] = useState('');
  const search = (searchQuery, token) => {
    getSearchResults(searchQuery, token).then(
      result => {
        setQuery(searchQuery);
        setToken(result.nextPageToken);
        setData(result.items);
        events(classes.results);
      }
    );
  }

  const body = document.querySelector('body');
  body.classList.add(classes.body);

  return (
    <>
      <SearchArea onChange={search}/>
      <Results data={data} cls={classes.results}/>
    </>
  );
}

const AppW = () => <App />;

export default AppW;
