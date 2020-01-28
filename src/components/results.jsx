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
    height: "50%",
    marginTop: "2vh",
    overflowX: "hidden"
  },
});

const smoothScroll = (classes, delta) => {
  const results = document.querySelector(`.${classes.results}`);
  let offset = 0;
  let step = Math.sign(delta) * 20;
  const timer = setInterval(() => {
    if (Math.abs(offset) >= Math.abs(delta)) {
      results.scrollBy(offset - delta, 0);
      clearInterval(timer);
    } else {
      offset = offset + step;
      results.scrollBy(step, 0);
    }
  }, 1);
}

const Results = ({data, onScrollEnd, isLoading}) => {
  const classes = useStyles();

  const getOffset = (delta) => {
    const results = document.querySelector(`.${classes.results}`);
    return Math.sign(delta) * (results.scrollWidth / 30);
  }

  const lineEndCheck = (results) => {
    const child = results.childNodes[results.childNodes.length - 1];
    if (Math.ceil(child.getBoundingClientRect().x) === results.clientWidth - child.offsetWidth) {
      results.scrollTo(0, 0);
      onScrollEnd();
    }
  }

  const handleScroll = (e) => {
    const results = document.querySelector(`.${classes.results}`);
    smoothScroll(classes, getOffset(e.deltaY));
    lineEndCheck(results);
  };

  let mouseDownX = 0;
  let deltaX = 0;

  const handleMouseDown = (e) => {
    let offsetX;
    if (e.changedTouches) {
      offsetX = e.changedTouches[0].screenX;
    } else offsetX = e.screenX || 0;
    const current = Math.floor(offsetX / 100);
    mouseDownX = current
  }

  const handleMouseUp = (e) => {
    let offsetX;
    if (e.changedTouches) {
      offsetX = e.changedTouches[0].screenX;
    } else offsetX = e.screenX || 0;
    const results = document.querySelector(`.${classes.results}`);
    const current = Math.floor(offsetX / 100);
    deltaX = Math.sign(mouseDownX - current);
    smoothScroll(classes, getOffset(deltaX));
    lineEndCheck(results);
  }

    if (isLoading) return (
      <div className={classes.loadingWrapper}>
        <CircularProgress />
      </div>
    )
    if (Object.keys(data).length === 0) return null;
    return (
      <div
        className={classes.results}
        onWheel={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        key={uniquid()}
      >
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
