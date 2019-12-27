import React from 'react';
import uniquid from 'uniquid';
import { makeStyles } from '@material-ui/core/styles';

import VideoCart from './Card';
// import NavArrows from './Arrows';

const useStyles = makeStyles({
  results: {
    display: 'flex',
    overflowX: 'auto'
  },
});

const Results = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  if (!data.map) return null
  // const showNavigationButtons = () => {
  // }
  // const hideNavigationButtons = () => {
  // }
  // onMouseEnter={showNavigationButtons} onMouseLeave={hideNavigationButtons}
  return (
    <div className={classes.results} >
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
