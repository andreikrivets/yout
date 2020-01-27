import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import uniquid from 'uniquid';

import VideoCart from './Card';

const useStyles = makeStyles({
  loadingWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: "10vw"
  },
  results: {
    display: "flex",
    overflowX: "hidden",
    marginTop: "2vh",
  },
});

const smoothScroll = (results, delta) => {
  let offset = 0;
  let step = delta / 10;
  const timer = setInterval(() => {
    if (Math.abs(offset) >= Math.abs(delta)) clearInterval(timer);
    offset = offset + step;
    results.scrollBy(step, 0);
  }, 10);
}

const Results = ({data, onScrollEnd, isLoading}) => {
  const classes = useStyles();
  let results = document.querySelector(`.${classes.results}`);
  const handleScroll = (e) => {
    results = document.querySelector(`.${classes.results}`);
    const childWidthTxt = getComputedStyle(results.childNodes[0]).width;
    const childWidth = +childWidthTxt.slice(0, childWidthTxt.length - 2);
    const offset = (Math.sign(e.deltaY) * (childWidth));
    console.log(childWidth);
    smoothScroll(results, offset);
    if (results.scrollLeft * 0.155 >= results.offsetWidth) {
      results.scrollTo(0, 0);
      onScrollEnd()
    }
  };
    if (isLoading) return (
      <div className={classes.loadingWrapper}>
        <CircularProgress />
      </div>
    )
    if (Object.keys(data).length === 0) return null;
    return (
      <div className={classes.results} onWheel={handleScroll} key={uniquid()}>
      {data.map((el) => {
        const information = {
          title: el.snippet.title,
          descr: el.snippet.description,
          thumb: el.snippet.thumbnails.medium.url,
          link: el.id.videoId
        }
      return <VideoCart key={uniquid()} info={information}/>
    })}
      </div>
    )
}

export default Results;
