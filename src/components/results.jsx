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
    transition: "left 5s cubic-bezier(0, 0, 1, 1)",
  },
});

const smoothScroll = (results, delta) => {
  let offset = 0;
  let step = delta / 10;
  const timer = setInterval(() => {
    offset = offset + step;
    results.scrollBy(step, 0);
    if (Math.abs(offset) >= Math.abs(delta)) clearInterval(timer);
  }, 25);
}

const Results = ({data, onScrollEnd, isLoading}) => {
  const classes = useStyles();
  let results = document.querySelector(`.${classes.results}`);
  const handleScroll = (e) => {
    results = document.querySelector(`.${classes.results}`);
    const childWidth = results.childNodes[0].clientWidth;
    const offset = (Math.sign(e.deltaY) * childWidth);
    smoothScroll(results, offset);
    if (results.scrollLeft * 0.655 >= results.offsetWidth) {
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
      const { title } = el.snippet;
      const descr = el.snippet.description;
      const thumb = el.snippet.thumbnails.medium.url;
      const link = el.id.videoId;
      return <VideoCart key={uniquid()} title={title} descr={descr} thumb={thumb} link={link}/>
    })}
      </div>
    )
}

export default Results;
