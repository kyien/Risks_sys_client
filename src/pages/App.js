import React, { Component } from 'react';
import CheckAuth from './check_auth'
import {Provider} from 'react-redux'

import {store} from './redux/store'
// import { connect } from "react-redux"

class App extends Component {
 

  render() {
    return (
    <Provider store={store}>

      <CheckAuth/>
    
    </Provider>
    )
  }
}

export default App