import React from 'react';
import {Input, Button, Grid} from 'semantic-ui-react';
import $ from 'jquery';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: this.props.ingredient,
      pairings: this.props.pairings,
      brand: this.props.brand,
      all_brands: this.props.all_brands
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getIngredientData = this.getIngredientData.bind(this);
    this.getBrandData = this.getBrandData.bind(this);
  }

  componentDidMount() {}

  getIngredientData = (name) => (ev) =>  {
    console.log(name)

    $.getJSON('/api/ingredients?query=' + name)
      .then((results) => {
        this.setState({
          ingredient: results.ingredient,
          pairings: results.pairings.join(" - "),
          all_ingredients: results.all_ingredients.join(" - ")
        });
      })
  }

  getBrandData = (id) => (ev) =>  {
    console.log(id)

    $.getJSON('/api/brands?query=' + id)
      .then((results) => {
        this.setState({
          brand: results.brand,
          all_brands: results.all_brands.join(" - "),
        });
      })
  }

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column">
          <div className="button-container">
            <button type="button" className="ui inverted blue button" id="ind-btn-1" onClick={this.getIngredientData("whiskey")}>Click To See Scotch Whiskey Data!</button>
            <button type="button" className="ui inverted blue button" id="ind-btn-2" onClick={this.getIngredientData("cheese")}>Click To See Cottage Cheese Data!</button>
            <button type="button" className="ui inverted blue button" onClick={this.getIngredientData("salmon")}>Click To See Atlantic Salmon Data!</button>
          </div>
          <div className="results">
            <h1>Ingredient:</h1>
              <h3>{ this.state.ingredient }</h3>
            <h1>Pairings For Ingredient:</h1>
              <h3>{ this.state.pairings }</h3>
            <h1>All Ingredients:</h1>
              <h3>{ this.state.all_ingredients }</h3>
          </div>
        </div>
        <div className="eight wide column">
          <div className="button-container">
            <button type="button" className="ui inverted blue button" id="ind-bra-btn" onClick={this.getBrandData(20)}>Click To See Remy Cointreau Data!</button>
          </div>
          <div className="results">
            <h1>Brand:</h1>
              <h3>{ this.state.brand }</h3>
            <h1>All Brands:</h1>
              <h3>{ this.state.all_brands }</h3>
          </div>
        </div>
      </div>
    );
  }
};

MainNav.propTypes = {
  ingredient: React.PropTypes.string,
  pairings: React.PropTypes.string,
  all_ingredients: React.PropTypes.string
};

export default MainNav;
