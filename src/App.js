import React, { Component } from 'react';
import axios from './axios/axios';
import styled from 'styled-components';

const AppStyled = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  font-family: 'Roboto', sans-serif;
  color: #505054;
  font-weight: 300;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Search = styled.div`
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
  width: 450px;
  padding: 30px 25px;
  margin-top: 40px;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 8px;
  border: none;
  border-radius: 6px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.25);
  &:focus {
    outline-width: 0;
  }
`;
const TweetList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Tweet = styled.a`
  margin-top: 15px;
  border: 1px solid rgba(162, 162, 162, 0.5);
  padding: 20px 15px;
  color: #505054;
  text-decoration: none;
`;
const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;

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
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${newSearch.searchUser}&count=15`
      )
      .then((res) => {
        console.log('');
        this.setState(() => ({ userTweets: res.data }));
      })
      .catch((err) => console.log(err));
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
      <AppStyled>
        <h1>Twitter API App</h1>
        <Container>
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
        </Container>
        <Footer>
          <a href='https://github.com/elisamartin/twitter-api/'>
            <span role='img' aria-label='laptop'>
              💻
            </span>
          </a>
        </Footer>
      </AppStyled>
    );
  }
}

export default App;
