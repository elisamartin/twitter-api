import React from 'react';
import axios from '../axios/axios';

import { Search, Input, TweetList, Tweet } from '../StyledComponents/StyledComponents';

class WordSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: '',
      wordTweets: []
    };
  }

  fetchWordTweets = (e) => {
    e.preventDefault();
    const newSearch = this.state;
    this.fetchWordTweetsHandler(e, newSearch);
    this.setState({
      wordTweets: []
    });
  };

  fetchWordTweetsHandler = (e, newSearch) => {
    e.preventDefault();
    axios()
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${newSearch.searchWord}&result_type=recent`
      )
      .then((res) => {
        console.log('');
        this.setState(() => ({ wordTweets: res.data.statuses }));
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Search>
        <h3>Find the last 15 tweets containing any word</h3>
        <form onSubmit={this.fetchWordTweets}>
          <Input
            onChange={this.handleInputChange}
            type='search'
            placeholder='Search'
            value={this.state.searchWord}
            name='searchWord'
          />
        </form>
        <TweetList>
          {this.state.wordTweets.map((tweet) => {
            return (
              <Tweet href={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`} key={tweet.id}>
                <img src={tweet.user.profile_image_url} alt={tweet.user.screen_name} />
                <b>@{tweet.user.screen_name} </b>
                {tweet.text}
              </Tweet>
            );
          })}
        </TweetList>
      </Search>
    );
  }
}

export default WordSearch;
