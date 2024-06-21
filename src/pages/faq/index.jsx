import React, { useState } from "react";
import Layout from "../../components/Layout";
import Content, { HTMLContent } from "../../components/Content";
import { graphql } from "gatsby";
import "./FaqPage.css";

const FaqPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  const PageContent = HTMLContent || Content;

  // Estado para controlar qué tarjeta está abierta
  const [openCards, setOpenCards] = useState({});

  // Función para cambiar el estado de la tarjeta abierta
  const toggleCard = (index) => {
    console.log(index, 'index');
    setOpenCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

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
                <div className="faq-container">
                  {edges.map(({ node }, index) => (
                    <div key={index} className="faq-item">
                      <div
                        className={`faq-card ${openCards[index] ? "open" : ""}`}
                        onClick={() => toggleCard(index)}
                      >
                        <div className="faq-title">
                          <p className="is-size-5">{node.frontmatter.title}</p>
                        </div>
                        {openCards[index] && (
                          <HTMLContent content={node.html} className={'faq-content open'} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: {key: {eq: "Question"}}
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default FaqPage;
