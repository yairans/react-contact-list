import React, { Component } from 'react';
import TableContainer from './containers/TableContainer'
import HeaderContainer from './containers/HeaderContainer'

class App extends Component {
  render() {
    return (
        <div>
          <HeaderContainer />
          <TableContainer />
        </div>
    );
  }
}

export default App;
