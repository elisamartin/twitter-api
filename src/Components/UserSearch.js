import React from 'react';
import axios from '../axios/axios';

import { Search, Input, TweetList, Tweet } from '../StyledComponents/StyledComponents';

class UserSearch extends React.Component {
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

  fetchUserTweetsHandler = (e, newSearch) => {
    e.preventDefault();
    axios()
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${newSearch.searchUser}&count=15`
      )
      .then((res) => {
        console.log('');
        this.setState(() => ({ userTweets: res.data }));
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Search>
        <h3>Find the last 15 tweets of any user</h3>
        <form onSubmit={this.fetchUserTweets}>
          <Input
            onChange={this.handleInputChange}
            type='search'
            placeholder='Search'
            value={this.state.searchUser}
            name='searchUser'
          />
        </form>
        <TweetList>
          {this.state.userTweets.map((tweet) => {
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

export default UserSearch;
