import React, { Component } from 'react';
import './App.css';

import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'
import {recipes} from './tempList'

class App extends Component {

  constructor(){
    super()
    this.state = {
      recipes:recipes,
      url:"https://www.food2fork.com/api/search?key=b6fb5d86fb9419eeec1129a9e77a1ada",
      details_id:35382,
      pageIndex:1
    }
  }

  // async getRecipes() {
  //    try {
  //      const data = await fetch(this.state.url);
  //      const jsonData = await data.json();
  //      console.log(jsonData);
  //      this.setState({
  //        recipes:jsonData.recipes
  //      })
  //    } catch (error) {
  //        console.log(error);
  //    }
  // }
  //
  // componentDidMount() {
  //     this.getRecipes();
  // }


  displayPage = (index) => {
      switch (index) {
        case 1:
            return (<RecipeList recipes={this.state.recipes}  HandleDetails={this.HandleDetails}/>)
        case 0:
            return (<RecipeDetail  id={this.state.details_id} handleIndex={this.handleIndex}/>)
      }
  }


  handleIndex = (index) => {
        this.setState({
          pageIndex:index
        })
  }

  HandleDetails = (index,id) => {
    this.setState({
        pageIndex:index,
        details_id:id
    })
  }

  render() {
    return (
      <div className="container">
         {(this.displayPage(this.state.pageIndex))}
      </div>
    );
  }
}

export default App;
