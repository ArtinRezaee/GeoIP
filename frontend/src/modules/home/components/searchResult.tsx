import React from 'react';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '../../../makeStyles';
import { UserInfo } from '../../../types';

type SearchResultProps = {
  userInfo: UserInfo;
};

const useStyles = makeStyles()((theme) => ({
  container: {
    margingTop: theme.spacing(2),
  },
}));

export const SearchResult: React.FC<SearchResultProps> = ({
  userInfo,
}: SearchResultProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <List>
        {Object.entries(userInfo).map(([key, value], index) => (
          <React.Fragment key={`${key}_${value}_${index}`}>
            <ListItem key={`${index}_${value}`}>
              <ListItemText
                key={`${key}_${value}`}
                primary={key}
                secondary={value}
              />
            </ListItem>
            <Divider key={value} />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default SearchResult;
