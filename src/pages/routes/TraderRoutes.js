import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../../app/shared/Spinner';

const TraderDashboard = lazy(() => import('../../app/dashboard/TraderDashboard'));
const Edit =lazy(() => import('../../pages/trader/Account/Edit'));
const Verification=lazy(() => import('../../pages/trader/Account/Verification'))
const Deposit=lazy(() => import('../../pages/trader/Finances/Deposit'));
const Withdraw=lazy(() => import('../../pages/trader/Finances/Withdraw'));
const Trades=lazy(() => import('../../pages/trader/Trades/Live'));
const ChartFrame=lazy(()=> import('../../pages/trader/Chart/chart-frame'))

export default function TraderRoutes() {
  return (
    <Suspense fallback={<Spinner/>}>
    <Switch>


          {/* trader routes path */}
          <Route exact path="/trader/dashboard" component={ TraderDashboard } />
          <Route exact path="/trader/account/edit" component={Edit } />
          <Route exact path="/trader/account/verification" component={Verification}/>
          <Route exact path="/trader/transfer/deposit" component={Deposit} />
          <Route exact path="/trader/transfer/withdraw" component={Withdraw} />
          <Route exact path="/trader/trades/live" component={Trades} />
          <Route exact path="/trader/chart" component={ChartFrame}/>
          
      <Redirect to="/trader/dashboard" />
    </Switch>
  </Suspense>
  )
}
