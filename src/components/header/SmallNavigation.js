import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {
  Button,
  Icon,
  Menu,
  MenuItem,
} from '@material-ui/core';
import PageLink from './PageLink';

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

class MenuNavigation extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{fontSize: 18}}
        >
          <Icon color="inherit" className={`fa fa-sm fa-bars`}/>
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.handleClose}
        >
          {this.props.data.allJavascriptFrontmatter.edges
            .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
            .map(edge => edge.node.frontmatter)
            .map(({path, text, icon}) => (
              <PageLink key={path} to={path}>
                <MenuItem onClick={this.handleClose} style={{
                  textTransform: 'none',
                  fontFamily: 'Acme',
                  fontSize: 18
                }}>
                  <Icon color="inherit" className={`fa fa-sm fa-${icon}`}/>
                  {text}
                </MenuItem>
              </PageLink>
            ))
          }
        </Menu>
      </div>
    );
  }
}

const SmallNavigation = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <MenuNavigation data={data}/>
      </div>
    )}/>
);

export default SmallNavigation;
