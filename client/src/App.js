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
      <div className='App'>
        <div className='ui text container'>
          <MainNav favoriteColor='Click Button to Find out' />
          <h2>Welcome</h2>
        </div>
      </div>
    );
  }
}

export default App;
