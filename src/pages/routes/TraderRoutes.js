import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../../app/shared/Spinner';

const TraderDashboard = lazy(() => import('../../app/dashboard/TraderDashboard'));
const Edit =lazy(() => import('../trader/Account/Edit'));
const Verification=lazy(() => import('../trader/Account/Verification'))
const Deposit=lazy(() => import('../trader/Finances/Deposit'));
const Withdraw=lazy(() => import('../trader/Finances/Withdraw'));
const LiveTrades=lazy(() => import('../trader/Trades/Live'));
const DemoTrades=lazy(() => import('../trader/Trades/Demo'))
const ChartFrame=lazy(()=> import('../trader/Chart/chart-frame'))
const TradeReports=lazy(()=>import('../trader/Trades/Reports'))
const FinanceReports=lazy(()=>import('../trader/Finances/Reports'))
export default function TraderRoutes() {
  return (
    <Suspense fallback={<Spinner/>}>
    <Switch>


          {/* trader routes path */}
          <Route exact path="/trader/dashboard" component={ TraderDashboard } />
           {/*Account*/}
          <Route exact path="/trader/account/edit" component={Edit } />
          <Route exact path="/trader/account/verification" component={Verification}/>

              {/*Finances*/}
          <Route exact path="/trader/transfer/deposit" component={Deposit} />
          <Route exact path="/trader/transfer/withdraw" component={Withdraw} />
          <Route exact path="/trader/finance/report" component={FinanceReports} />

                            {/*Trades*/}
          <Route exact path="/trader/trades/live" component={LiveTrades} />
          <Route exact path="/trader/trades/demo" component={DemoTrades} />
          <Route exact path="/trader/trades/report" component={TradeReports} />

                {/*Graph*/}
          <Route exact path="/trader/chart" component={ChartFrame}/>
          
      <Redirect to="/trader/dashboard" />
    </Switch>
  </Suspense>
  )
}
