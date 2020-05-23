import axios from 'axios'
// import { MyfxbookApi } from 'myfxbook-api-client';
import * as calc from './functionz'


    //state actions

    export const stateError = error => ({
      type:'STATE_HAS_ERROR',
      error
    })
    //Auth Actions
    export const registerStart = () => ({
      type: 'REGISTER_START',
    })
    
    export const registerFinished = (user,token,usertype) => ({
      type: 'REGISTER_FINISHED',
      user,
      token,
      usertype
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
      .then( async(res)=>{ 
             
        console.log(res.data)
           await  dispatch(registerFinished(res.data.user,res.data.access_token,'client'))
          })
          
  .catch ((error) =>{
    
    console.log(error);
    dispatch(registerError(error))
 
    
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
                        await  dispatch(registerFinished(res.data.user,res.data.access_token,'trader'))
                        })
                        
                .catch ((error) =>{
                  
                  console.log(error);
                  dispatch(registerError(error))
              
                  
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
        .then( async(res)=>{ 
               
          console.log(res.data)
             await  dispatch(loginFinished(res.data.user,res.data.access_token,'client'))
            })
            
    .catch ((error) =>{
      
      console.log(error);
      dispatch(loginError(error))
   
      
    })
      }
      export const loginTraderUser =  (email,pass) => async(dispatch)=>{
        dispatch(loginStart())
        console.log('trader ..............')
        await axios.post('https://api.sortika.com/trader/login',

        // {
        //   headers:{
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        //   }
        // },
        {
          email:email,
          password:pass
        })
        .then( async(res)=>{ 
               
          console.log(res.data)
             await  dispatch(loginFinished(res.data.user,res.data.access_token,'trader'))
            })
            
    .catch ((error) =>{
      
      console.log(error);
      dispatch(loginError(error))
   
      
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