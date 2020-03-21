import React from "react"
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';
import {
  Typography,
  Paper,
  Grid,
  Hidden,
} from "@material-ui/core";
import Typing from 'react-typing-animation';
import Images from '../assets/images';
import './style.css';
import './style.css';

const query = graphql`
  query {
    site {
      siteMetadata {
        education {
          title
          location
          time
        }
        certifications {
          title
          description
          link
          image
        }
        interests {
          title
          description
        }
      }
    }
  }`;

const TypingImage = () => (
  <div className="wrap">
    <img alt="about me" src={Images.aboutme.AboutMeImage} style={{
      maxWidth: '100%',
    }}/>
    <Typography component={Typing}>
      <div className='text-over-image'>
        <h1 style={{ fontFamily: 'Acme' }}>Hi, I'm Michael Barney</h1>
        <i><strong>Staying Curious</strong></i>
      </div>
    </Typography>
  </div>
);

const ImageLinks = () => (
  <Grid container spacing={0} justify="space-evenly">
    <Hidden smDown>
      <Grid item md={3} lg={3} xl={3}></Grid>
    </Hidden>
    <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
      <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
        <img alt="AWS" src={Images.aboutme.AWSLogo} className='grow'/>
      </a>
    </Grid>
    <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
      <a href="https://iusb.edu" target="_blank" rel="noopener noreferrer">
        <img alt="IU" src={Images.aboutme.IULogo} className='grow'/>
      </a>
    </Grid>
    <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
      <a href="https://trek10.com" target="_blank" rel="noopener noreferrer">
        <img alt="Trek10" src={Images.aboutme.Trek10Logo} className='grow' />
      </a>
    </Grid>
    <Hidden smDown>
      <Grid item md={3} lg={3} xl={3}></Grid>
    </Hidden>
  </Grid>
);

const Education = ({ educations }) => educations.map(edu => (
  <div key={edu.title} style={{ margin: '1em', marginBottom: '2em'}}>
    <Typography variant='subheading'>{edu.title}</Typography>
    <Typography variant='caption' style={{ float: 'left'}}>{edu.location}</Typography>
    <Typography variant='caption' style={{ float: 'right'}}>{edu.time}</Typography>
  </div>
));

const Certifications = ({ certifications }) => certifications.map(cert => (
  <div key={cert.title} style={{ margin: '1em'}}>
    <Grid container spacing={0} justify="space-evenly">
      <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
        <Typography variant='subheading'>{cert.title}</Typography>
        <Typography variant='caption' >{cert.description}</Typography>
      </Grid>
      <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
          <img alt={cert.title} src={Images.certs[cert.image]} className='grow'  style={{
          maxHeight: '128px',
        }}/>
        </a>
      </Grid>
    </Grid>
  </div>
));

const Interests = ({ interests }) => interests.map(interest => (
  <div key={interest.title} style={{ margin: '1em' }}>
    <Typography variant='subheading'>{interest.title}</Typography>
    <Typography variant='caption' >{interest.description}</Typography>
  </div>
));

const AboutMePage = ({ data }) => (
  <Layout>
    <Paper style={{margin: '12px', padding: '12px'}}>
      <TypingImage />
      <Typography variant="headline" style={{ textAlign: 'center' }}>
        <i>Who Am I?</i>
      </Typography>
      <Typography variant="caption" component='div'>
        <p>I'm a DevOps Engineer at <a href="https://trek10.com" target="_blank" rel="noopener noreferrer">Trek10 Inc.</a>, entering the workforce as a "<a href="https://twitter.com/forrestbrazeal/status/1051953942492602370" target="_blank" rel="noopener noreferrer">serverless native</a>." I am also a graduate from Indiana University with a B.S. in Computer Science. I have 5 AWS certifications, most notably the AWS Certified DevOps Engineer - Professional.</p>
        <p>I have a passion for software enginnering and technology, and also enjoy playing video games.</p>
      </Typography>
      <ImageLinks />

      <hr />

      <Typography variant="headline" style={{ textAlign: 'center' }}>
        <i>Education</i>
      </Typography>
      <Education educations={data.site.siteMetadata.education}/>

      <hr />

      <Typography variant="headline" style={{ textAlign: 'center' }}>
        <i>Certifications</i>
      </Typography>
      <Certifications certifications={data.site.siteMetadata.certifications}/>

      <hr />

      <Typography variant="headline" style={{ textAlign: 'center' }}>
        <i>Interests</i>
      </Typography>
      <Interests interests={data.site.siteMetadata.interests}/>
    </Paper>
  </Layout>
);

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <AboutMePage data={data}/>
    )}
  />
);

export const frontmatter = {
  icon: 'user',
  text: 'About Me',
  path: '/about',
  order: 4,
};
