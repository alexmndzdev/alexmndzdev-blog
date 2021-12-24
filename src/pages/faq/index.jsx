//import React from "react";
//import PropTypes from "prop-types";
//import { graphql, StaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import Content, { HTMLContent } from "../../components/Content";

////class FanPageTemplate extends React.Component {
////export const FanPageTemplate = ({ title, content, contentComponent }) => {
    ////const PageContent = contentComponent || Content;

    ////return (
      ////<section className="section section--gradient">
        ////<div className="container">
          ////<div className="columns">
            ////<div className="column is-10 is-offset-1">
              ////<div className="section">
                ////<h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  ////{title}
                ////</h2>
                ////<PageContent className="content" content={content} />
              ////</div>
            ////</div>
          ////</div>
        ////</div>
      ////</section>
    ////);
////};

////FaqPageTemplate.propTypes = {
  ////title: PropTypes.string.isRequired,
  ////content: PropTypes.string,
  ////contentComponent: PropTypes.func,
////};

////class FanPage extends React.Component {
  ////console.log('ENTRO');
  ////render() {
    ////const { data } = this.props
    ////const { edges: post } = data.allMarkdownRemark
    //////const { markdownRemark: post } = data;

    ////return (
      ////<Layout>
        ////<FaqPageTemplate
          ////contentComponent={HTMLContent}
          ////title={post.frontmatter.title}
          ////content={post.html}
        /////>
      ////</Layout>
    ////);
  ////}
////};

////FanPage.propTypes = {
  ////data: PropTypes.shape({
    ////allMarkdownRemark: PropTypes.shape({
      ////edges: PropTypes.array,
    ////}),
  ////}),
////}

//export default function FanPage() {
  //return (
    //<StaticQuery
      //query={graphql`
        //query FanPageQuery {
          //allMarkdownRemark(
            //filter: {frontmatter: {key: {eq: "Question"}}}
          //) {
            //edges {
              //node {
                //frontmatter {
                  //title
                //}
              //}
            //}
          //}
        //}
      //`}
      //render={data => (
        //<header>
          //<h1>{data.title}</h1>
        //</header>
      //)}
    ///>
  //);
//}

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
          excerpt(pruneLength: 400)
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default FanPage
