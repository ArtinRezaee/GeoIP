import React, { useCallback, useState } from 'react';
import {
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UserInfo } from '../../../types';
import { ProgressButton } from '../../common';
import { makeStyles } from '../../../makeStyles';
import { useIpAddress } from '../hooks';
import SearchResult from './searchResult';

const useStyles = makeStyles()((theme) => ({
  container: {
    width: '30%',
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(5),
  },
  searchField: {
    width: '100%',
  },
}));

export const Search: React.FC = () => {
  const { classes } = useStyles();
  const [ipAddress, setIpAddress] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<UserInfo | undefined>();
  const [searchType, setSearchType] = useState<'web' | 'db'>('web');

  const { getLocationInfo } = useIpAddress(searchType);

  const handleSeachChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIpAddress(event.target.value);
    },
    []
  );

  const handleSearchClick = useCallback(() => {
    if (!ipAddress) {
      return;
    }

    setSearching(true);

    getLocationInfo(ipAddress)
      .then((res) => {
        const searchRes = res.data as UserInfo;
        setSearchResult(searchRes);
        setSearching(false);
      })
      .catch(() => {
        setSearching(false);
      });
  }, [getLocationInfo, ipAddress]);

  const handleSearchTypeChange = useCallback((event, type) => {
    setSearchType(type);
  }, []);

  return (
    <div className={classes.container}>
      <ToggleButtonGroup
        color="primary"
        value={searchType}
        exclusive
        onChange={handleSearchTypeChange}
        size="small">
        <ToggleButton value="web">Web Service</ToggleButton>
        <ToggleButton value="db">Database Service</ToggleButton>
      </ToggleButtonGroup>
      <div className={classes.searchBox}>
        <TextField
          id="search-input"
          label="IP Address"
          variant="outlined"
          size="small"
          className={classes.searchField}
          onChange={handleSeachChange}
        />
        <ProgressButton
          disabled={searching}
          circularProgressSize={20}
          size="large"
          loading={searching}
          onClick={handleSearchClick}
          startIcon={<SearchIcon />}>
          <Typography variant="button">Search</Typography>
        </ProgressButton>
      </div>
      {searchResult && <SearchResult userInfo={searchResult} />}
    </div>
  );
};

export default Search;
