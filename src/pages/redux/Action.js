import axios from 'axios'
// import { MyfxbookApi } from 'myfxbook-api-client';

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
      let myfxerror;
        let myfxprofile;

        await axios.post('https://api.sortika.com/trader/myfx',
      { 
        email:email,
        password:pass
      }).then(async(res)=>{
           console.log(res.data)
           myfxerror=res.data.error

          //  myfxprofile=Object.assign({},res.data.accounts)
          //  console.log(myfxprofile)
        }).catch((error) =>{
          console.log(error)
        })
       

 
        if(!myfxerror){
            await axios.post('https://api.sortika.com/trader/register',
            {
              username:username,
              email:email,
              password:pass
              // profile:myfxprofile
            })
            .then( async(res)=>{ 
                  
              console.log(res.data)
                await  dispatch(registerFinished(res.data.user,res.data.access_token,'trader'))
                })
                
        .catch ((error) =>{
          
          console.log(error);
          dispatch(registerError(error))
      
          
        })
      }
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
    await  axios.post('https://api.sortika.com/trader/logout?token='+token)
    .then(() => {
        dispatch(logoutFinished())
    }).catch((error)=>{

        dispatch(logoutError(error))

    })
    }