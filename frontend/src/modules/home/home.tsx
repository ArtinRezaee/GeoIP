import React from 'react';
import { makeStyles } from '../../makeStyles';
import { Search, Title } from './components';

const useStyles = makeStyles()((theme) => ({
  app: {
    textAlign: 'center',
    height: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '70%',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(0.25),
  },
}));

export const Home: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <Title />
        <Search />
      </div>
    </div>
  );
};

export default Home;
