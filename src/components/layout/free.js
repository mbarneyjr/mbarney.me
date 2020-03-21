import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Helmet from './helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { bottomBarHeight, theme } from '../layout.config';

import '../../assets/fontawesome/css/all.css'
import '../../assets/fontawesome/css/brands.css'
import '../../assets/fontawesome/css/fontawesome.css'
import '../../assets/fontawesome/css/regular.css'
import '../../assets/fontawesome/css/svg-with-js.css'
import '../../assets/fontawesome/css/v4-shims.css'

import Header from '../header';
import Footer from '../footer';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          icon
          url
        }
      }
    }
  }`;

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <Helmet title={data.site.siteMetadata.title} />
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div style={{ paddingBottom: bottomBarHeight }}>
            {children}
          </div>
          <Footer socials={data.site.siteMetadata.social} />
        </MuiThemeProvider>
      </div>
    )}
  />
);

export default Layout;
