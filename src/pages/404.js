import React from "react"
import Layout from '../components/layout/free';
import {
  Typography,
} from '@material-ui/core';
import './style.css';

const Home = () => (
  <Layout>
    <Typography variant="headline" style={{
      fontFamily: 'Acme',
      position: 'absolute',
      top: '50%',
      left: '50%',
      msTransform: 'translate(-50%, -50%)',
      transform: 'translate(-50%, -50%)',
    }}>
      Uh oh, it looks like that page can't be found! :(
    </Typography>
  </Layout>
);

export default Home;
