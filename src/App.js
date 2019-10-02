import React, { Component } from 'react';
import axios from './axios/axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUser: '',
      userTweets: [],
      searchWord: '',
      wordTweets: [] 
    };
  }

  fetchUserTweets = (e) => {
    e.preventDefault();
    const newSearch = this.state;
    this.fetchUserTweetsHandler(e, newSearch);
    this.setState({
      userTweets: []
    });
  };

  fetchWordTweets = (e) => {
    e.preventDefault();
    const newSearch = this.state;
    this.fetchWordTweetsHandler(e, newSearch);
    this.setState({
      wordTweets: []
    });
  };

  fetchUserTweetsHandler = (e, newSearch) => {
    e.preventDefault();
    axios()
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${newSearch.searchUser}&count=3`
      )
      .then((res) => {
        console.log('res', res);
        this.setState(() => ({ userTweets: res.data }));
      })
      .catch((err) => console.log(err));
  };

  fetchWordTweetsHandler = (e, newSearch) => {
    e.preventDefault();
    axios()
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${newSearch.searchWord}&result_type=recent&count=3`
      )
      .then((res) => {
        console.log('res', res);
        this.setState(() => ({ wordTweets: res.data.statuses }));
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='App'>
        <h1>Twitter API App</h1>
        <div className='User search'>
          <form onSubmit={this.fetchUserTweets}>
            <input
              onChange={this.handleInputChange}
              type='search'
              placeholder='User name search'
              value={this.state.searchUser}
              name='searchUser'
            />
            <button type='submit'>Search</button>
          </form>
          <div className='tweets'>
            {this.state.userTweets.map((tweet) => {
              return <p key={tweet.id}>{tweet.text}</p>;
            })}
          </div>
        </div>
        <div className='Word search'>
          <form onSubmit={this.fetchWordTweets}>
            <input
              onChange={this.handleInputChange}
              type='search'
              placeholder='One word search'
              value={this.state.searchWord}
              name='searchWord'
            />
            <button type='submit'>Search</button>
          </form>
          <div className='tweets'>
            {this.state.wordTweets.map((tweet) => {
              return <p key={tweet.id}>{tweet.text}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
