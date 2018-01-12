import React from "react";
import Helmet from "react-helmet";

import style from './../css/docs.module.css';
require("prismjs/themes/prism.css");

export default function Template({ data, }) {
  const { markdownRemark } = data; 
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter);
  return (
    <div className={style.Documentation}>
      <h1>Documentation</h1>

      <div className={style.Reference}>
        <h4>{frontmatter.name}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        name
      }
    }
  }
`;