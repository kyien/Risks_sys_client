import {combineReducers} from 'redux'
// import update from 'immutability-helper'

const AuthinitialState = {
    loggedIn: false,
    token:null,
    isFetching:false,
    hasError: false,
    errorMessage: '',
    user: null
  }
const UsersinitialState={
    users:null
}
const ListingsinitialState={
   listings:null
}

const PaymentsinitialState={
  payments:null,
  service_totals:null,
  daily_totals:null
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
const usersReducer=(state=UsersinitialState,action)=>{
    switch(action.type)
    {
        // case 'FETCHING_USERS':
        //     return  {
        //       ...state,
        //       isFetching:true
        //     }
        case 'FETCHED_USERS':
          // const newState
          const {users}=action
          return {...state,
                    users
                    // isFetching:false
                  }
        // case'FETCH_USERS_ERROR':
        //     const { error } = action
        //     return{...state,hasError:true,errorMessage:error}
      
        default: 
            return state
            

              
    }
   
}
const listingsReducer=(state=ListingsinitialState,action)=>{
    switch(action.type)
    {
      // case 'FETCHING_LISTINGS':
      //     return {
      //       ...state,
      //       isFetching:true
      //     }
        case 'FETCHED_LISTINGS':
          const {listings}=action
            return {...state,
                    listings
                  }
        // case'FETCH_LISTINGS_ERROR':
        //     const { error } = action
        //     return{...state,hasError:true,errorMessage:error}
        default: 
            return state
            

              
    }
   
}

const paymentsreducer =(state=PaymentsinitialState,action)=>{

    switch(action.type){
      // case 'FETCHING_PAYMENTS':
      //     return {
      //       ...state,
      //       isFetching:true
      //     }
      case 'FETCHED_PAYMENTS':
        const {payments}=action
        return {...state,payments}

        case 'FETCH_DAILY_TOTAL':
          const{daily_totals}=action
          return{...state,daily_totals}

        case 'FETCH_SERVICE_TOTALS':
          const{service_totals}=action
          return {...state,service_totals}
    
      // case 'FETCHING_PAYMENTS_ERROR':
      //     const { error } = action

      //     return{...state,hasError:true,errorMessage:error}

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
            const { user,token} = action
            return {
              ...state,
              user,
              token,
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
            const { user,token} = action
            return {
              ...state,
              user,
              token,
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
  usersReducer,
  listingsReducer,
  paymentsreducer,
      Auth

})

export default Rootreducer