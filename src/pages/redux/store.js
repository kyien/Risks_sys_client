import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import Rootreducer from './Reducer'

export const store=createStore(Rootreducer,{},applyMiddleware(ReduxThunk,logger))