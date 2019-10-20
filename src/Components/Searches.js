import React from 'react';
import { Route } from 'react-router-dom';

import { Container } from '../StyledComponents/StyledComponents';

import UserSearch from './UserSearch';
import WordSearch from './WordSearch';

class Searches extends React.Component {
  render() {
    return (
      <Container>
        <Route path='/' render={(props) => <UserSearch {...props} />} />
        <Route path='/' render={(props) => <WordSearch {...props} />} />
      </Container>
    );
  }
}

export default Searches;
