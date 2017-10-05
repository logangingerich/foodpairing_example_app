var Main = React.createClass({
  getInitialState: function() {
    return { showResults: false };
  },
  onClick: function() {
    let resultsState = !this.state.showResults;
    this.setState({ showResults: resultsState });
  },
  render() {
    const title = this.props.title
    return(
      <div>
        <h1 onClick={this.onClick}>React Test: </h1>
        <h1>{ this.state.showResults ? title : '' }</h1>
      </div>
    )
  }
});
