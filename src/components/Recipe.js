import React from 'react'
import PropTypes from 'prop-types'

class Recipe extends React.Component {
  render () {
    const {image_url,title,source_url,publisher,recipe_id} = this.props.data;
    const {HandleDetails} = this.props;

    return (
        <React.Fragment>
           <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <div className="card">
                   <img
                     src={image_url}
                     alt="pic"
                     className="img-card-top"
                     style={{height:'14rem'}}
                  />
                <div className="card-body text-capitalize">
                   <h6>{title}</h6>
                   <h6 className="text-warning text-slanted">
                      {`provider by ${publisher}}`}
                   </h6>
                </div>
                <div className="card-footer">
                   <button type="button" className="btn btn-primary text-capitalize" onClick={HandleDetails}>details</button>
                   <a href={source_url} className="btn btn-success mx-2 text-capitalize" target="_blank" ref="noppeer">Recipe Url</a>
                </div>
              </div>
           </div>
        </React.Fragment>
    )
  }
}

export default Recipe;
