import React from 'react';
import { Link } from 'gatsby';
import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
} from '@material-ui/core';
import SmallNavigation from './SmallNavigation';
import NormalNavigation from './NormalNavigation';

const MenuBar = ({ siteTitle }) => {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar>
        <Typography variant="display1" color="inherit" style={{
          flex: 1,
          fontFamily: 'Acme'
        }}>
          <Link style={{color: 'inherit', textDecoration: 'none'}} to="/">
            {siteTitle}
          </Link>
        </Typography>
        <Hidden xsDown>
          <NormalNavigation />
        </Hidden>
        <Hidden smUp>
          <SmallNavigation />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
