import React from "react"
import Layout from '../components/layout';
import { Typography } from "@material-ui/core";
import { StaticQuery, graphql } from 'gatsby';
import { Paper } from '@material-ui/core';
import { Link } from 'gatsby';
import './style.css';

const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order:DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
            description
            _PARENT
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }`;

const BlogPosts = () => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(edge =>
          <Link key={edge.node.id} to={edge.node.frontmatter.path} style={{
            textDecoration: 'none',
          }}>
            <Paper style={{margin: '12px', padding: '12px'}} className="grow">
              <Typography variant="display1">
                {edge.node.frontmatter.title}
              </Typography>
              <Typography variant="caption">
                {edge.node.frontmatter.date}
                <span style={{ float: 'right' }}>{edge.node.fields.readingTime.text}</span>
              </Typography>
              <Typography variant="subheading">
                {edge.node.frontmatter.description}
              </Typography>
            </Paper>
          </Link>)}
      </div>
    )}
  />
)

const Blog = () => (
  <Layout>
    <Typography>
      <BlogPosts />
    </Typography>
  </Layout>
);

export default Blog;

export const frontmatter = {
  icon: 'rss',
  text: 'Blog',
  path: '/blog',
  order: 2,
}
