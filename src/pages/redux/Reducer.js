import {combineReducers} from 'redux'
// import update from 'immutability-helper'

const AuthinitialState = {
    loggedIn: false,
    token:null,
    isFetching:false,
    hasError: false,
    errorMessage: '',
    user: null,
    usertype:''
  }

const initialstate={
  isFetching:false,
  hasError:false,
  errorMessage:''

}

const stateReducer=(state=initialstate,action)=>{
   switch(action.type){
     case 'STATE_FETCHING':
       return{
         ...state,isFetching:true
       }
       case 'STATE_NOT_FETCHING':
         return {
           ...state,
           isFetching:false
         }
         case 'STATE_HAS_ERROR':
            const { error } = action
            return{
              ...state,hasError:true,errorMessage:error
            }

            default: 
            return state
            
      
   }
}



const Auth=(state=AuthinitialState,action)=>{
    switch(action.type)
    {
        case 'LOGIN_START': {
            return {
              ...state,
              isFetching: true
            };
          }
          case 'LOGIN_FINISHED': {
            const { user,token,usertype} = action
            return {
              ...state,
              user,
              token,
              usertype:usertype,
              loggedIn: true,
              isFetching: false
            };
          }
          case 'LOGIN_ERROR': {
            const { error } = action
            return {
              ...state,
              isFetching: false,
              loggedIn: false,
              hasError: true,
              token:null,
              user: null,
              errorMessage: error
            };
          }
          case 'LOGOUT_START': {
            return {
              ...state,
              isFetching: true
            }
          }
          case 'LOGOUT_FINISHED': {
            return {
              ...state,
              loggedIn: false,
              isFetching: false,
              hasError: false,
              errorMessage: '',
              token:null,
              user: null
            }
          }
          case 'LOGOUT_ERROR': {
            const { error } = action
            return {
              ...state,
              isFetching: false,
              loggedIn:true,
              hasError: true,
              errorMessage: error,
              
            }
          }
          case 'REGISTER_START': {
            return {
              ...state,
              isFetching: true
            };
          }
          case 'REGISTER_FINISHED': {
            const { user,token,usertype} = action
            return {
              ...state,
              user,
              token,
              usertype:usertype,
              loggedIn: true,
              isFetching: false
            };
          }
          case 'REGISTER_ERROR': {
            const { error } = action
            return {
              ...state,
              isFetching: false,
              loggedIn: false,
              hasError: true,
              token:null,
              user: null,
              errorMessage: error
            };
          }
         
          default: {
            return state
          }
    
    }
}

const Rootreducer= combineReducers({
  stateReducer,
 
      Auth

})

export default Rootreducer