import React from "react"
import Layout from '../components/layout/free';
import {
  Link,
  StaticQuery,
  graphql,
} from 'gatsby';
import {
  Typography,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";
import Images from '../assets/images';
import './style.css';

const query = graphql`
  query {
    site {
      siteMetadata {
        projects {
          title
          image
          description
          links {
            url
            text
            external
          }
        }
      }
    }
  }`;

const Project = ({ project }) => (
  <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
    <Paper style={{margin: '12px', padding: '12px'}}>
      <Typography variant="title" style={{ textAlign: 'center' }}>
        <div style={{fontFamily: 'Acme' }}>{project.title}</div>
      </Typography>
      <img alt={project.title} src={Images.projects[project.image]} />
      <Typography variant="caption">
        <div style={{fontFamily: 'Acme' }}>{project.description}</div>
      </Typography>
      {project.links && (
        <div style={{textAlign: 'center'}}>
          <hr/>
          {project.links.map(link => link.external
            ? (
              <a key={link.text} href={link.url} target="_blank" rel="noopener noreferrer">
                <Button key={link.text}>
                  <Typography component='span' style={{
                    textTransform: 'none',
                    fontFamily: 'Acme',
                    fontSize: 18
                  }}>{link.text}</Typography>
                </Button>
              </a>
            ) : (
              <Link to={link.url} key={link.text}>
                <Button key={link.text}>
                  <Typography component='span' style={{
                    textTransform: 'none',
                    fontFamily: 'Acme',
                    fontSize: 18
                  }}>{link.text}</Typography>
                </Button>
              </Link>
            ))}
        </div>
      )}
    </Paper>
  </Grid>
);

const ProjectsPage = ({ projects }) => (
  <Layout>
    <Grid container spacing={0} justify="space-evenly">
      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </Grid>
  </Layout>
);

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <ProjectsPage projects={data.site.siteMetadata.projects} />
    )}
  />
);

export const frontmatter = {
  icon: 'rocket',
  text: 'Projects',
  path: '/projects',
  order: 3,
}
