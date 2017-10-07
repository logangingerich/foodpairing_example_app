var Main = React.createClass({
  getInitialState: function() {
    return { showResults: false,
    };
  },
  onClickWhiskey: function() {
    let resultsState = true;
    this.setState({ showResults: resultsState,
                    pairings: this.props.whiskey_pairings

     });
  },
  onClickOther: function() {
    let resultsState = true;
    this.setState({ showResults: resultsState,
                    pairings: 'hi'
     });
  },
  render() {
    return(
      <div>
        <div className="button-container">
          <button type="button" className="btn btn-primary ind-btn" onClick={this.onClickWhiskey}>Bourbon Whiskey</button>
          <button type="button" className="btn btn-primary ind-btn" onClick={this.onClickOther}>Other</button>
        </div>
        <div className="results">
          <h1>{ this.state.showResults ? this.state.pairings : 'Click an Ingredient' }</h1>
        </div>
      </div>
    )
  }
});
