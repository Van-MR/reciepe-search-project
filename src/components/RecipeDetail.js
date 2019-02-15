import React from 'react'
import PropTypes from 'prop-types'
import {recipe} from '../tempDetail'

class RecipeDetail extends React.Component {

    state = {
      recipe:recipe
    }


  // async componentDidMount() {
  //      const id = this.props.id;
  //      const url = `https://www.food2fork.com/api/get?key=b6fb5d86fb9419eeec1129a9e77a1ad&rId=${id}`
  //      try {
  //        const data = await fetch(url);
  //        const jsonData = await data.json();
  //        this.setState({
  //          recipe:jsonData.recipe
  //        });
  //      } catch(error) {
  //         console.log(error);
  //      }
  // }

  render () {
      const {handleIndex} = this.props;
      const {
        image_url,
        publisher,
        publisher_url,
        source_url,
        title,
        ingredients
      } = this.state.recipe;
      return (
        <React.Fragment>
            <div className="container">
              <div className="row">
                 <div className="col-10 mx-auto col-md-6 my-3">
                     <button onClick={() => handleIndex(1)} type="button" className="btn btn-warning text-capitalize">back to RecipeList</button>
                     <img src={image_url} style={{marginTop:'2rem'}} className="d-block w-100" alt="recipe" />
                 </div>
                 <div className="col-4 mx-auto col-md-6 my-3">
                    <h6 className="text-uppercase">{title}</h6>
                    <h6 className="text-warning text-capitalize text-slanted">proveider by {publisher}</h6>
                    <a href={publisher_url} ref="hehhe" className="btn btn-primary mt-2 text-capitalize">publisher wapper</a>
                    <a href={source_url} ref="source" className="btn btn-success mt-2 text-capitalize">recipe url</a>
                    <ul className="list-group">
                       <h2 className="mt-3 mb-4">ingredients</h2>
                       {ingredients.map((item,index) => {
                         return (
                           <li className="list-group-item text-slanted" key={index}>{item}</li>
                         )
                       })}
                    </ul>
                  </div>
              </div>
          </div>
        </React.Fragment>
      )
  }
}

export default RecipeDetail;
