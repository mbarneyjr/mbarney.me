import React from 'react'
import { bottomBarHeight } from '../layout.config';
import {
  Typography,
  Paper,
} from '@material-ui/core'
import './style.css';

export default ({ siteTitle, socials }) => (
  <Paper square={true} style={{
    height: bottomBarHeight,
    position: 'fixed',
    width: '100%',
    bottom: 0,
    textAlign: 'center',
  }}>
    <div style={{position:'relative', width: '100%', height: '100%'}}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        <Typography variant="caption" style={{
          fontFamily: 'Acme',
        }}>
          Contact Me!
        </Typography>
        {socials.map(social => (
          <Typography key={social.url} variant="title" style={{
            display: 'inline',
            margin: '0.25em',
          }}>
            <a id="social-button" href={social.url} target="_blank" rel="noopener noreferrer">
              <i color="inherit" className={`fa fa-sm fa-${social.icon}`}/>
            </a>
          </Typography>
        ))}
      </div>
    </div>
  </Paper>
);
