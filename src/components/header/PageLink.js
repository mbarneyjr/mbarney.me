import React from 'react';
import { Link } from 'gatsby';

export default ({children, to}) => {
  return (
    <Link to={to} activeStyle={{color: 'inherit'}} style={{
      textDecoration: 'none',
      color: '#777',
    }}>
      {children}
    </Link>
  )
}
