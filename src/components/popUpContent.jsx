import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';

const getPopUpContent = (link) => {
  return (
      <DialogContentText id="alert-dialog-description">
      <iframe title="link" width="800px" height="400px" src={`https://www.youtube.com/embed/${link}`} allowFullScreen></iframe>
      </DialogContentText>
  )
}

export default getPopUpContent;
