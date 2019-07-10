import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ArticleList from './ArticleList'

class App extends React.Component {
  state = { articles: [] };

  onSearchSubmit = async term => {

    const response = await axios.get("https://newsapi.org/v2/everything",
    {
      params: {
        apiKey: "***********",
        q: term,
      },
    }
  );
    this.setState({ articles: response.data.articles });
  };

  headLines = async () => {

    const response = await axios.get("https://newsapi.org/v2/top-headlines",
    {
      params: {
        country: "us",
        apiKey: "***********",
      },
    }
  );
    console.log(response);
    this.setState({ articles: response.data.articles });
  };



  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearch={this.onSearchSubmit} onClick={this.headLines}/><br/>
        <ArticleList articles={this.state.articles}/>
      </div>
    );
  }
};

export default App;
