import Helmet from 'react-helmet';
import favicon from '../../assets/favicon.png'
import React from 'react';

export default ({ title }) => (
  <Helmet title={title}>
    <link rel="icon" type="image/png" href={favicon}/>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
    <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"/>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
  </Helmet>
);
