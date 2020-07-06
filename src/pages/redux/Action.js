import axios from 'axios'
// import { MyfxbookApi } from 'myfxbook-api-client';
import * as calc from './functionz'


    //state actions

    export const stateError = error => ({
      type:'STATE_HAS_ERROR',
      error
    })

    export const not_fetching=()=>({
      type:'STATE_NOT_FETCHING'
    })
    export const state_fetching=()=>({
      type:'STATE_FETCHING'
    })
    export const state_success=(message)=>({
      type:'STATE_SUCCESSFUL',
      message
      
    })
      export const state_fetch_error= error =>({
        type:'STATE_HAS_ERROR',
        error
      })  


    //Auth Actions
    export const registerStart = () => ({
      type: 'REGISTER_START',
    })
    
    export const registerClientFinished=(message)=>({
      type:'REGISTER_CLIENT_FINISHED',
      message
    })
    export const registertraderFinished = (user,token,type) => ({
      type: 'REGISTER_TRADER_FINISHED',
      user,
      token,
      type
    })

    export const registerError = error => ({
      type:'REGISTER_ERROR',
      error
    })

    export const forexstart=()=>({
      type:'FETCH_START',

    })

    export const forexfinished=(rates)=>({
      type:'FETCH_END',
      rates
    })

    export const forexerr=(error)=>({
      type:'FETCH_ERROR',
      error
    })
  
   export const registerClientUser =  (username,email,pass) => async(dispatch)=>{
      dispatch(registerStart())

      
      
      await axios.post('https://api.sortika.com/client/register',
      {
        username:username,
        email:email,
        password:pass
      })
      .then((res)=>{ 
             
        console.log(res.data)
          if(res.status==201){
            dispatch(registerClientFinished('Success! Kindly check your mail for email verification link'))
          }
          else if(res.status == 203){
            dispatch(registerError(res.data.message))
          }
          else {
            dispatch(registerError('server error encountered!'))
          }
          })
          
  .catch ((error) =>{
    
    console.log(error);
    dispatch(registerError(error.message))
 
    
  })
    }
   export const registerTraderUser =  (username,email,pass) => async(dispatch)=>{
      dispatch(registerStart())
        let myfxprofile;

        await axios.post('https://api.sortika.com/trader/myfx/',
      { 
        email:email,
        password:pass
      }).then(async(res)=>{
          console.log(res)
          switch (res.data.status){

            case 419 :
              dispatch(stateError(res.data.info))
              break

              case 417:
                dispatch(stateError(res.data.info))
                break
                case 200:
                  //calculate win ratio
                    let win_ratio=await calc.calculateWin(res.data.history)
                    let loss_ratio=await calc.calculateloss(res.data.history)
                    let avgprofit =await calc.calc_profitfactor(res.data.acc)

                // console.log(win_ratio+ ' '+loss_ratio+' '+avgprofit)
                  //calculate profit ratio
                  //calculate profit factor

                  await axios.post('https://api.sortika.com/trader/register',
            {
              username:username,
              email:email,
              password:pass,
              win_ratio:win_ratio,
              loss_ratio:loss_ratio,
              profit_factor:avgprofit

            }).then( async(res)=>{ 
                  
                      console.log(res.data)
                        await  dispatch(registertraderFinished(res.data.user,res.data.access_token,'trader'))
                        })
                        
                .catch ((error) =>{
                  
                  console.log(error);
                  dispatch(registerError(error.message))
              
                  
                })

                  break
              default:
                dispatch(stateError('Server not available'))
          }
         
        }).catch((error) =>{
          dispatch(stateError(error.message))
          console.log(error)
        })
       

 
      
    }


    export const loginStart = () => ({
        type: 'LOGIN_START',
      })
      
      export const loginFinished = (user,token,usertype) => ({
        type: 'LOGIN_FINISHED',
        user,
        token,
        usertype
      })
      
      export const loginError = error => ({
        type:'LOGIN_ERROR',
        error
      })
      export const loginClientUser =  (email,pass) => async(dispatch)=>{
        dispatch(loginStart())
        console.log('client ..............')

        await axios.post('https://api.sortika.com/client/login',
        {
          email:email,
          password:pass
        })
        .then((res)=>{ 
          console.log(res.status)
          switch(res.status){
            case 201:
                dispatch(loginFinished(res.data.user,res.data.access_token,'client'))
            break
            case 401:
              dispatch(loginError(res.data.message))
              break
            case 417:
                dispatch(loginError(res.data.message))
                break
            default:
                  dispatch(loginError('server error'))
          }
            })
            
    .catch ((error) =>{
      
      console.log(error.message);
      dispatch(loginError('invalid email/password'))
   
    })
      }
      export const loginTraderUser =  (email,pass) => async(dispatch)=>{
        dispatch(loginStart())
        console.log('trader ..............')
        await axios.post('https://api.sortika.com/trader/login',
        {
          email:email,
          password:pass
        })
        .then( async(res)=>{ 
               
          console.log(res.data)
          switch(res.data.code){
            case 200:
              await  dispatch(loginFinished(res.data.user,res.data.access_token,'trader'))

            break
            case 412:
              dispatch(loginError(res.data.message))
              break
            case 417:
                dispatch(loginError(res.data.message))
                break
            default:
                  dispatch(loginError('server error'))
          }
            })
            
    .catch ((error) =>{
      
      console.log(error);
      dispatch(loginError('invalid email/password'))
   
      
    })
      }

      export const logoutStart = () => ({
        type: 'LOGOUT_START'
      })
      
     export const logoutFinished = () => ({
        type: 'LOGOUT_FINISHED'
      })
      
      export const logoutError = error => ({
        type: 'LOGOUT_ERROR',
        error
      })

  export const logoutClientUser =  (token) => async(dispatch) => {
    console.log('logging out>>>')
    dispatch(logoutStart())
    // try {
    await  axios.post('https://api.sortika.com/client/logout?token='+token)
    .then(() => {
        dispatch(logoutFinished())
    }).catch((error)=>{

        dispatch(logoutError(error))

    })
    }
  export const logoutTraderUser =  (token) => async(dispatch) => {
    console.log('logging out>>>')
    dispatch(logoutStart())
    // try {
    await  axios.post('https://api.sortika.com/trader/logout?token='+token,
    
    )
    .then(() => {
        dispatch(logoutFinished())
    }).catch((error)=>{

        dispatch(logoutError(error))

    })
    }

    export const getForex=()=>async(dispatch)=>{
      dispatch(forexstart())

        await axios.get('https://www.freeforexapi.com/api/live?pairs=EURGBP,USDJPY,USDCAD,USDEUR,NZDUSD,USDCHF,AUDUSD',
        {
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }
        ).then((res)=>{
          console.log(res.data.rates)
          dispatch(forexfinished(res.data.rates))
        }).catch((error)=>{
          console.log(error)
          dispatch(forexerr(error))
        })

    }

    ///Client Mpesa
    export const clientbalance= amount=>({

        type:'FETCH_BALANCE',
        amount
    })

    export const clientDepositMpesa=(phone,amount)=>async(dispatch)=>{
      // dispatch(state_fetching())
      await axios.post('https://api.sortika.com/client/payment/test',{
        phone:phone,
        amount:amount
      }).then( async (res)=>{

        console.log(res)
        let mID=res.data.MerchantRequestID

          await axios.post('https://api.sortika.com/client/payment/query',{
            id:mID
          }).then((res)=>{
            console.log(res)
            dispatch(clientbalance(res.data.info[0].Amount_paid))
          }).catch(error=>console.log(error))

          // if(res.ResponseCode==0){
        // let mID=res.MerchantRequestID
          // }
      }).catch((error)=>{
        console.log(error)
      })
    }

    //forgot password
    export const submitForgotemailTrader=(email)=>async(dispatch)=>{
            dispatch(state_fetching())
            await axios.post('https://api.sortika.com/trader/forgot_password',
            {
              email:email
            }).then((res)=>{
                 
              switch(res.status){

                case 201:
                    dispatch(state_success(res.data.message))
      
                break
                case 417:
                    dispatch(state_fetch_error(res.data.message))
                break
      
                case 401:
                    dispatch(state_fetch_error(res.data.message))
                break
      
                default:
                    dispatch(state_fetch_error('Server error encountered'))
      
              }
            
            }).catch((error)=>{
              console.log(error)
              dispatch(state_fetch_error('server error encountered'))
            })

    }
    export const submitForgotemailClient=(email)=>async(dispatch)=>{
      dispatch(state_fetching())
      await axios.post('https://api.sortika.com/client/forgot_password',
      {
        email:email
      }).then((res)=>{
           console.log(res)
        switch(res.status){

          case 201:
              dispatch(state_success(res.data.message))

          break
          case 203:
              dispatch(state_fetch_error(res.data.message))
          break

          case 401:
              dispatch(state_fetch_error(res.data.message))
          break

          default:
              dispatch(state_fetch_error('Server error encountered'))

        }
      
      }).catch((error)=>{
        console.log(error)
        dispatch(state_fetch_error('Server error encountered'))
      })
    }