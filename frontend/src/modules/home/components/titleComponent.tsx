import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '../../../makeStyles';
import { ReactComponent as SearchIcon } from './assets/search.svg';

const useStyles = makeStyles()((theme) => ({
  title: {
    marginBottom: theme.spacing(5),
  },
  image: {
    width: '90%',
    height: '90%',
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

export const Title: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.title}>
      <SearchIcon className={classes.image} />
      <Typography variant="h3">IP Address to Geo Location</Typography>
      <Typography variant="h5">Get geo location based on IP address</Typography>
    </div>
  );
};

export default Title;
