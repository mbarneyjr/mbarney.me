import React from "react"
import Layout from '../components/layout/free';
import { Link } from 'gatsby';
import {
  Typography,
  Paper,
  Grid,
} from '@material-ui/core';
import BlogImage from '../assets/images/blog.jpeg';
import BlogFlipImage from '../assets/images/blog-flip.jpeg';

import './style.css';

const HomeItem = ({ title, caption, image, to }) => (
  <Link to={to} style={{textDecoration: 'none'}}>
    <Paper style={{margin: '12px', padding: '12px'}} className="grow">
      {image && <img alt={to} src={image} style={{
        display: 'block',
        margin: 'auto',
        maxWidth: '100%',
      }}/>}
      <Typography variant="headline" style={{
        textAlign: 'center',
        fontFamily: 'Acme',
      }}>
        {title}
      </Typography>
      <Typography variant="caption" style={{
        textAlign: 'center',
      }}>
        {caption}
      </Typography>
    </Paper>
  </Link>
);

const Home = () => (
  <Layout>
    <Grid container spacing={0} justify="space-evenly">
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <HomeItem
          title="Hello, welcome to mbarney.me!"
          caption=""
          to="/"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <HomeItem
          title="Check out my blog!"
          caption="Read some of my thoughts and other things I want to share"
          to="/blog"
          image={BlogFlipImage}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <HomeItem
          title="Check out my projects!"
          caption="I've done a few cool things, take a look"
          to="/projects"
          image={BlogImage}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <HomeItem
          title="Learn a bit about me!"
          caption="Take a look at some interesting things about me!"
          to="/about"
        />
      </Grid>
    </Grid>
  </Layout>
);

export default Home;

export const frontmatter = {
  icon: 'home',
  text: 'Home',
  path: '/',
  order: 1,
}
