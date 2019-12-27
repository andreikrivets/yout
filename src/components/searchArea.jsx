import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputWrapper: {
    display: "flex",
    justifyContent: "center"
  }
});

const SearchArea = ({ onChange }) => {
  const handleChange = (event) => {
    if (event.key === 'Enter') {
      onChange(event.target.value);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.inputWrapper}>
      <TextField
        id="outlined-search"
        label="search"
        type="search"
        margin="normal"
        variant="outlined"
        onKeyDown={handleChange}
      />
    </div>
  )
};

export default SearchArea;
