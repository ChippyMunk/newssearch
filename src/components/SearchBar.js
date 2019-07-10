import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onFormSearch = (event) => {
    event.preventDefault();

    this.props.onSearch(this.state.term);
  }

  onFormClick = (event) => {
    event.preventDefault();

    this.props.onClick();
  }

  render() {
    return (
      <div className="ui search">
        <h1 className="ui header">News Search</h1>
          <div className="ui icon input">
            <input type="text" value={this.state.term} onChange={(event) => this.setState({ term: event.target.value})} />
            <button onClick={this.onFormSearch} className="ui primary button"><i className="search icon"></i>Search</button>
            <button onClick={this.onFormClick} className="ui orange button"><i className="chart line icon"></i>Discover</button>
          </div>
      </div>

    )
  }
}

export default SearchBar;
