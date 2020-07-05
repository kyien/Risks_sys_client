import React, { Component } from 'react'
// import './index.css';
// import { get_petty_cash,getsales } from "./components/redux/Actions"
// import Main from './frontend/Main';
import FrontRoutes from './frontend/routing'
import Auth from './backend/Auth';
import { connect } from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom'


class CheckAuth extends Component {
 

  render() {
    

    if(!this.props.Authenticated){
      return (
      <Router>
            <FrontRoutes/>
        </Router>
      ) 
    }
    else{
    return (
      <Router basename="backend">

       <Auth/>
      </Router>
    )
  }
}
}

const mapStateToProps=(state)=>{
    return{
      Authenticated:state.Auth.loggedIn
    //   AuthUser:state.Auth.user,  
    }
}



export default connect(mapStateToProps)(CheckAuth)
