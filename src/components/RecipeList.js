import React from 'react'
import PropTypes from 'prop-types'

import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

class RecipeList extends React.Component {

  render () {
       const {recipes,HandleDetails} = this.props

       return (
         <React.Fragment>
              <RecipeSearch />
              <div className="container my-5">
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                        <h1 className="text-slanted">recipe List</h1>
                    </div>
                </div>
                {/* end title */}
                <div className="row">
                     {recipes.map(item => <Recipe key={item.recipe_id} data={item} HandleDetails={() => HandleDetails(0,recipes.recipe_id)}/>)}
                </div>
              </div>

         </React.Fragment>
       )
  }
}

export default RecipeList;
