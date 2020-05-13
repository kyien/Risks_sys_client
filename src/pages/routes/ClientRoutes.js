

import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../../app/shared/Spinner';



//client routes
const ClientDashboard = lazy(() => import('../../app/dashboard/ClientDashboard'));
const Deposit=lazy(() => import('../finance/Deposit'));
const Withdraw=lazy(() => import('../finance/Withdraw'));
const Trades=lazy(() => import('../trades/Trades'))
const Verification=lazy(() => import('../Account/Verification'))
const Edit=lazy(() => import('../Account/Edit'))

export default function ClientRoutes() {
  return (
    <Suspense fallback={<Spinner/>}>
    <Switch>

        {/* client routes path */}
    <Route exact path="/client/dashboard" component={ ClientDashboard } />
    <Route path="/client/transfer/deposit" component={Deposit}/>
    <Route path="/client/transfer/withdraw" component={Withdraw}/>
    <Route path="/client/account/verification" component={Verification}/>
    <Route path="/client/account/edit" component={Edit}/>
    <Route path="/client/trade-options"  component={Trades}/>


        

      <Redirect to="/client/dashboard" />
    </Switch>
  </Suspense>
  )
}
