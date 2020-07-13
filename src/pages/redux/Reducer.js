import {combineReducers} from 'redux'
// import update from 'immutability-helper'

const AuthinitialState = {
    loggedIn: false,
    token:null,
    isFetching:false,
    hasError: false,
    errorMessage: '',
    successMessage:'',
    user: null,
    usertype:'',
    trader_acc_balance:0,
    client_acc_balance:0,
    }

const initialstate={
  isFetching:false,
  hasError:false,
  errorMessage:'',
  responseMessage:'',
  type:''

}

const forexinitial={
  isFetching:false,
  hasError:false,
  errorMessage:'',
  rates:null
}
const assetsinitial={
  isFetching:false,
  hasError:false,
  errorMessage:'',
  assets:null
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
              ...state,isFetching:false,hasError:true,errorMessage:error
            }

            case 'STATE_SUCCESSFUL':
              const {message} =action
              return {
                ...state,
                isFetching:false,
                responseMessage:message,
                
              }

            default: 
            return state
            
      
   }
}

const Assets=(state=assetsinitial,action)=>{
  switch(action.type) {

    case 'FETCH_ASSETS_START':
          return{
              ...state,isFetching:true
            }
        
      case 'FETCH_ASSETS_END':
        const{assets}=action
        return {
          ...state,
          isFetching: false,
          hasError: false,
          assets
        }
  

  case 'FETCH_ASSETS_ERROR':
    const {error}=action
    return {
      ...state,
      isFetching: false,
      hasError: true,
      assets:null,
      errorMessage: error
    }

    default: 
    return state
    
  }

}

const Forex=(state=forexinitial,action)=>{
    switch(action.type) 
    {
      case 'FETCH_START':
          return{
              ...state,isFetching:true
            }
        
      case 'FETCH_END':
        const{rates}=action
        return {
          ...state,
          isFetching: false,
          hasError: false,
          rates
        }
      
      case 'FETCH_ERROR':
        const {error}=action
        return {
          ...state,
          isFetching: false,
          hasError: true,
          rates:null,
          errorMessage: error
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

          case 'REGISTER_CLIENT_FINISHED':{

            const {message}=action
            return{
              ...state,
              isFetching:false,
              successMessage:message
            }
          }
          case 'REGISTER_TRADER_FINISHED': {
            const { user,token,type} = action
            return {
              ...state,
              user,
              token,
              loggedIn: true,
              usertype:type,
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

          case 'FETCH_CLIENT_BALANCE':{
            const {amount}=action
            // let curr_amount={...state.client_acc_balance}
            return {
              ...state,
              client_acc_balance:amount
            }
          }
          case 'FETCH_TRADER_BALANCE':{
            const {amount}=action
            // let curr_amount={...state.trader_acc_balance}
            return {
              ...state,
              trader_acc_balance:amount
            }
          }
          
         
          default: {
            return state
          }
    
    }
}

const Rootreducer= combineReducers({
  stateReducer,
 Assets,
      Auth,

      Forex

})

export default Rootreducer