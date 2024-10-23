import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
    <div key={item.text} className="column is-one-third">
      <div
        className="card shadow-md transform is-duration-300 hover-shadow-xl hover-translate-y"
        style={{ height: '100%' }}>
        <div className="card-image">
          <figure className="image">
            <PreviewCompatibleImage 
              imageInfo={{
                image: item.image,
                alt: item.text,
                style: { width: '100%', height: '100%' }
              }}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="content has-text-grey-light">
            <h3>Dummy Text</h3>
            {item.text}
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
