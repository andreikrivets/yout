import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import getPopUpContent from './popUpContent';

const useStyles = makeStyles({
  card: {
    minWidth: '25%',
    maxWidth: '25%',
    marginLeft: '1%',
    marginBottom: 20,
    '&:first-of-type': {
      marginLeft: 0,
    }
  },
  media: {
    height: '15vw',
  },
});

const VideoCart = ({thumb, title, descr, link}) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    maxWidth='100%'
  >
    <DialogContent>
      {getPopUpContent(link)}
    </DialogContent>
  </Dialog>
    <Card className={classes.card}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={thumb}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descr}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}

export default VideoCart;
