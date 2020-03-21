import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  Button,
} from '@material-ui/core';
import PageLink from './PageLink';
// import pages from './pages';

const MenuBarButton = ({ text, to, icon }) => (
  <PageLink to={to}>
    <Button color='inherit' style={{
      textTransform: 'none',
      fontFamily: 'Acme',
      fontSize: 18
    }}>
      <i color="inherit" className={`fa fa-sm fa-${icon}`}/>
      {text}
    </Button>
  </PageLink>
)
const query = graphql`
  query {
    allJavascriptFrontmatter {
      edges {
        node {
          frontmatter {
            path
            text
            icon
            order
          }
        }
      }
    }
  }`;

const NormalNavigation = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        {data.allJavascriptFrontmatter.edges
          .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
          .map(edge => edge.node.frontmatter)
          .map(({path, text, icon}) => (
            <MenuBarButton key={path} text={text} icon={icon} to={path}/>
          ))}
      </div>
    )}
  />
);

export default NormalNavigation;
