import React from "react"
import Layout from "../components/layout"

import kebabCase from "lodash/kebabCase"

import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div>
      <Helmet title={title} />
      <div>
        <h1>Tags</h1>
        <ul style={{listStyle: "none"}}>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 100) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
