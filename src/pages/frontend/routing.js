import React,{ Suspense, lazy }from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../../app/shared/Spinner';




//front end routes
const Main= lazy(() => import('./Main'));
const Recover=lazy(() => import('./Recovery'));
const Verify =lazy(()=>import('./Verify'))
export default function FrontRoutes() {
  return (
    <Suspense fallback={<Spinner/>}>
    <Switch>

        {/* client routes path */}
    <Route exact path="/" component={ Main } />
    <Route path="/password/recover/:user/:token/:email" component={Recover}/>
    <Route path="/client/email/verify/:token/:email" component={Verify}/>
   


        

      <Redirect to="/" />
    </Switch>
  </Suspense>
  )
}
