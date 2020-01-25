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
    minWidth: "23.5%",
    maxWidth: "23.5%",
    marginLeft: "2%",
    marginBottom: 20,
    '&:first-of-type': {
      marginLeft: 0,
    }
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%"
  },
  media: {
    height: "15vw",
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
    maxWidth={false}
  >
    <DialogContent>
      {getPopUpContent(link)}
    </DialogContent>
  </Dialog>
    <Card className={classes.card}>
      <CardActionArea className={classes.cardContent} onClick={handleClickOpen}>
        <CardMedia
          component="img"
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
