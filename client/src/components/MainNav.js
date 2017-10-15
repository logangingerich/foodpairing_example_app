import React from 'react';
import {Input, Button} from 'semantic-ui-react';
import $ from 'jquery';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: this.props.favoriteColor
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    //Do Something
  }

  getData = (ev) =>  {
    console.log('Getting Pairings')

    $.getJSON('/api/ingredients?query=whiskey')
      .then((results) => {
        this.setState({
          favoriteColor: results.ingredient
        });
      })

    //Do your data call here
  }

  render() {
    return (
      <nav>
        <Button onClick={this.getData}>
          Get Favorite Color
        </Button>
        <span>{this.state.favoriteColor}</span>
      </nav>
    );
  }
};

MainNav.propTypes = {
  favoriteColor: React.PropTypes.string
};

export default MainNav;
