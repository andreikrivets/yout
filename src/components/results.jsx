import React from 'react';
import uniquid from 'uniquid';

import VideoCart from './Card';

const Results = ({ data, cls }) => {
  if (!data.map) return null
  return (
    <div className={cls}>
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
