import React, { Component } from 'react';

import MainNav from './components/MainNav';

class App extends Component {
  constructor(props) {
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className="container">
        <div id="header">
          <h1>Foodpairing</h1>
          <p>A Test App for the Foodpairing Ruby Gem</p>
        </div>
        <div className='ui text container'>
          <MainNav />
        </div>
      </div>
    );
  }
}

export default App;
