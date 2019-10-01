import React, { Component } from 'react';
import axios from './axios/axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchUser: '',
      tweets: []
    };
  }

  fetchUserTweets = (e) => {
    e.preventDefault();
    const newSearch = this.state;
    this.fetchUserTweetsHandler(e, newSearch);
    console.log(newSearch);
    this.setState({
      tweets: []
    });
  };

  fetchUserTweetsHandler = (e, newSearch) => {
    e.preventDefault();
    axios()
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${newSearch.searchUser}&count=3`
      )
      .then((res) => console.log('res', res))
      .then((res) => {
        this.setState(() => ({ tweets: res.data }));
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
            {this.state.tweets.map((tweet) => {
              return <p key={tweet.id}>{tweet.text}</p>;
            })}
          </div>
        </div>
        <div className='New search'>
          <p>New Search. Write a new word to get the last 15 tweets containing it</p>
        </div>
      </div>
    );
  }
}

export default App;
