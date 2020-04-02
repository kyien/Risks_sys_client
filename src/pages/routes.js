// import React,{Component}from 'react';
// import { Route, Switch,Redirect} from 'react-router-dom';

// import Trader from './pages/trader'
// import Client from '../app/dashboard/Dashboard'
//  import NotFound from './pages/notfound.js'
 
// class Routes extends Component {
//   render() {
//     return (
      
//       <Switch>
//         <Route path='/' exact component={Client} />
//         <Route path='/trader' exact component={Trader} />
//         {/* <Route path='/profile' component={ProfilePage} /> */}
//         {/* <Route path='/users' component={UsersPage} />
//         <Route path='/payments' component={Payments} />*/}

//         <Redirect to='/404' component={NotFound} /> 
//       </Switch>
      
//     );
//   }
// }

// export default Routes;

import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('../app/dashboard/Dashboard'));
const Deposit=lazy(() => import('./finance/Deposit'));
const Withdraw=lazy(() => import('./finance/Withdraw'));
const Trades=lazy(() => import('./trades/Trades'))
const Verification=lazy(() => import('./Account/Verification'))
const Edit=lazy(() => import('./Account/Edit'))


const Buttons = lazy(() => import('../app/basic-ui/Buttons'));
const Dropdowns = lazy(() => import('../app/basic-ui/Dropdowns'));
const Typography = lazy(() => import('../app/basic-ui/Typography'));

const BasicElements = lazy(() => import('../app/form-elements/BasicElements'));

const BasicTable = lazy(() => import('../app/tables/BasicTable'));

const FontAwesome = lazy(() => import('../app/icons/FontAwesome'));


const ChartJs = lazy(() => import('../app/charts/ChartJs'));

const Error404 = lazy(() => import('../app/user-pages/Error404'));
const Error500 = lazy(() => import('../app/user-pages/Error500'));

const Login = lazy(() => import('../app/user-pages/Login'));
const Register1 = lazy(() => import('../app/user-pages/Register'));

const BlankPage = lazy(() => import('../app/user-pages/BlankPage'));


class Routes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />

        <Route path="/transfer/deposit" component={Deposit}/>
        <Route path="/transfer/withdraw" component={Withdraw}/>
        
        <Route path="/account/verification" component={Verification}/>
        <Route path="/account/edit" component={Edit}/>

        <Route path="/trade-options"  component={Trades}/>

          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />

          <Route path="/icons/font-awesome" component={ FontAwesome } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/user-pages/error-404" component={ Error404 } />
          <Route path="/user-pages/error-500" component={ Error500 } />

          <Route path="/user-pages/blank-page" component={ BlankPage } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;