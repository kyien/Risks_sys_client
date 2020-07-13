

import React, { Component} from 'react';

import { connect } from "react-redux"

import ClientRoutes from '../routes/ClientRoutes'
// import TraderRoutes from '../routes/TraderRoutes'



//trader routes




// const Buttons = lazy(() => import('../app/basic-ui/Buttons'));
// const Dropdowns = lazy(() => import('../app/basic-ui/Dropdowns'));
// const Typography = lazy(() => import('../app/basic-ui/Typography'));

// const BasicElements = lazy(() => import('../app/form-elements/BasicElements'));

// const BasicTable = lazy(() => import('../app/tables/BasicTable'));

// const FontAwesome = lazy(() => import('../app/icons/FontAwesome'));


// const ChartJs = lazy(() => import('../app/charts/ChartJs'));

// const Error404 = lazy(() => import('../app/user-pages/Error404'));
// const Error500 = lazy(() => import('../app/user-pages/Error500'));

// const Login = lazy(() => import('../app/user-pages/Login'));
// const Register1 = lazy(() => import('../app/user-pages/Register'));

// const BlankPage = lazy(() => import('../app/user-pages/BlankPage'));


class Routes extends Component {
  render () {

    if(this.props.usertype ==='trader'){

      return  (

      <TraderRoutes/>
      )
    }
    else {

     return (

     <ClientRoutes/>
     )
    }
    
     
    
     
   
  }
}

const mapStateToProps=(state)=>{
  return{
    usertype:state.Auth.usertype, 
  }
}

export default connect(mapStateToProps)(Routes);