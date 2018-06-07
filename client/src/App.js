import 'babel-polyfill'
import React, { Component } from 'react';
import Header from './components/header'
import CategoriesList from './containers/CategoriesList'
import CssBaseLine from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseLine />
        <div className={'budget'}>
          <Header />
          <div className={'container'}>
            <CategoriesList />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
