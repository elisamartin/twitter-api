import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Searches from './Components/Searches';

import axios from './axios/axios';
import styled from 'styled-components';

const AppStyled = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  font-family: 'Roboto', sans-serif;
  color: #505054;
  font-weight: 300;
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchUser: '',
  //     userTweets: [],
  //     searchWord: '',
  //     wordTweets: []
  //   };
  // }

  // fetchUserTweets = (e) => {
  //   e.preventDefault();
  //   const newSearch = this.state;
  //   this.fetchUserTweetsHandler(e, newSearch);
  //   this.setState({
  //     userTweets: []
  //   });
  // };

  // fetchWordTweets = (e) => {
  //   e.preventDefault();
  //   const newSearch = this.state;
  //   this.fetchWordTweetsHandler(e, newSearch);
  //   this.setState({
  //     wordTweets: []
  //   });
  // };

  // fetchUserTweetsHandler = (e, newSearch) => {
  //   e.preventDefault();
  //   axios()
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${newSearch.searchUser}&count=15`
  //     )
  //     .then((res) => {
  //       console.log('');
  //       this.setState(() => ({ userTweets: res.data }));
  //     })
  //     .catch((err) => console.log(err));
  // };

  // fetchWordTweetsHandler = (e, newSearch) => {
  //   e.preventDefault();
  //   axios()
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${newSearch.searchWord}&result_type=recent`
  //     )
  //     .then((res) => {
  //       console.log('');
  //       this.setState(() => ({ wordTweets: res.data.statuses }));
  //     })
  //     .catch((err) => console.log(err));
  // };

  // handleInputChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    return (
      <AppStyled>
        <Route path='/' render={(props) => <Header {...props} />} />
        <Route path='/' render={(props) => <Searches {...props} />} />

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
