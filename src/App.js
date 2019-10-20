import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Searches from './Components/Searches';
import Footer from './Components/Footer';

import { AppStyled } from './StyledComponents/StyledComponents';

class App extends Component {
  render() {
    return (
      <AppStyled>
        <Route path='/' render={(props) => <Header {...props} />} />
        <Route path='/' render={(props) => <Searches {...props} />} />

        <Footer />
      </AppStyled>
    );
  }
}

export default App;
