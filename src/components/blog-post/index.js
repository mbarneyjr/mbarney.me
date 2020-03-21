import React from "react"
import { graphql } from "gatsby"
import Layout from '../layout';
import Disqus from 'disqus-react';

import {
  Typography,
  Paper,
} from "@material-ui/core";
import './style.css';

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, fields } = markdownRemark
  const location = typeof window !== 'undefined' && window.location.href;
  const disqusShortname = 'mbarney';
  const disqusConfig = {
      url: location,
      identifier: location,
      title: frontmatter.title,
  };
  return (
    <Layout>
      <Paper style={{ margin: '12px', padding: '12px' }}>
        <div>
          <Typography variant="headline" style={{ textAlign: 'center', fontSize: '2em', marginTop: '1em', marginBottom: '1em' }}>
            {frontmatter.title}
          </Typography>
          <Typography variant="caption" style={{ textAlign: 'center', fontSize: '1em', marginTop: '0.5em', marginBottom: '0.5em' }}>
            {frontmatter.description}
          </Typography>
          <div style={{textAlign: 'center', margin: 'auto'}}>
            <Typography variant="caption" style={{ textAlign: 'right', borderTop: '1px solid', borderBottom: '1px solid'}}>
              <div>{fields.readingTime.text}</div>
              <div>Posted: {frontmatter.date}</div>
              {frontmatter.updated && <div>Updated: {frontmatter.updated}</div>}
            </Typography>
          </div>
        </div>
        <Typography component='div'
            dangerouslySetInnerHTML={{ __html: html }}
        />
      </Paper>
      {/* <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
        Comments
      </Disqus.CommentCount> */}
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
