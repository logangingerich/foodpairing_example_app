var Main = React.createClass({
  getInitialState: function() {
    return { showResults: false,
    };
  },
  onClickWhiskey: function() {
    let resultsState = true;
    this.setState({ showResults: resultsState,
                    pairings: this.props.whiskey_pairings,
                    name: 'Bourbon Whiskey'

     });
  },
  onClick2: function() {
    let resultsState = true;
    this.setState({ showResults: resultsState,
                    pairings: this.props.pairings_2,
                    name: 'Apple'
     });
  },
  onClick3: function() {
    let resultsState = true;
    this.setState({ showResults: resultsState,
                    pairings: this.props.pairings_3,
                    name: 'Smoked Atlantic Salmon'
     });
  },
  onClick4: function() {
    let resultsState = true;
    this.setState({ showResults: resultsState,
                    pairings: this.props.pairings_4,
                    name: 'Asparagus'
     });
  },
  onClick5: function() {
    let resultsState = true;
    this.setState({ showResults: resultsState,
                    pairings: this.props.pairings_5,
                    name: 'Artichoke'
     });
  },
  render() {
    return(
      <div>
        <div className="button-container">
          <button type="button" className="btn btn-primary ind-btn" onClick={this.onClickWhiskey}>Bourbon Whiskey</button>
          <button type="button" className="btn btn-primary ind-btn" onClick={this.onClick2}>Apple</button>
          <button type="button" className="btn btn-primary ind-btn" onClick={this.onClick3}>Smoked Atlantic Salmon</button>
          <button type="button" className="btn btn-primary ind-btn" onClick={this.onClick4}>Asparagus</button>
          <button type="button" className="btn btn-primary ind-btn" onClick={this.onClick5}>Artichoke</button>
        </div>
        <div className="results">
          <h2>{ this.state.showResults ? 'Try pairing these ingredients with ' : '' }{this.state.name}</h2>
          <br></br>
          <h3>{ this.state.showResults ? this.state.pairings : 'Click an ingredient to get started' }</h3>
        </div>
      </div>
    )
  }
});
