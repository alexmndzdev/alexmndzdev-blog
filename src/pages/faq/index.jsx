import Layout from "../../components/Layout";
import Content, { HTMLContent } from "../../components/Content";
import React from "react"
import { graphql } from "gatsby"

const FanPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const PageContent = HTMLContent || Content;
  return (
    <Layout>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  Preguntas Frecuentes
                </h2>
                <div class="content">
                {
                  edges.map(({ node }, i) => {
                    return (
                      <>
                        <h3> 
                          { node.frontmatter.title }
                        </h3>
                        <p>{ node.excerpt }</p>
                      </>
                    )
                  })
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: {key: {eq: "Question"}}
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 1000)
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default FanPage
