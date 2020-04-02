import axios from 'axios'


    //Auth Actions
    export const registerStart = () => ({
      type: 'REGISTER_START',
    })
    
    export const registerFinished = (user,token) => ({
      type: 'REGISTER_FINISHED',
      user,
      token
    })
    
    export const registerError = error => ({
      type:'REGISTER_ERROR',
      error
    })
    export const registerUser =  (username,email,pass) => async(dispatch)=>{
      dispatch(registerStart())
      
      await axios.post('https://api.sortika.com/register',
      {
        username:username,
        email:email,
        password:pass
      })
      .then( async(res)=>{ 
             
        console.log(res.data)
           await  dispatch(registerFinished(res.data.user,res.data.access_token))
          })
          
  .catch ((error) =>{
    
    console.log(error);
    dispatch(registerError(error))
 
    
  })
    }
    export const loginStart = () => ({
        type: 'LOGIN_START',
      })
      
      export const loginFinished = (user,token) => ({
        type: 'LOGIN_FINISHED',
        user,
        token
      })
      
      export const loginError = error => ({
        type:'LOGIN_ERROR',
        error
      })
      export const loginUser =  (email,pass) => async(dispatch)=>{
        dispatch(loginStart())
        
        await axios.post('https://api.sortika.com/login',
        {
          email:email,
          password:pass
        })
        .then( async(res)=>{ 
               
          console.log(res.data)
             await  dispatch(loginFinished(res.data.user,res.data.access_token))
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

  export const logoutUser =  (token) => async(dispatch) => {
    console.log('logging out>>>')
    dispatch(logoutStart())
    // try {
    await  axios.post('https://api.sortika.com/logout?token='+token)
    .then(() => {
        dispatch(logoutFinished())
    }).catch((error)=>{

        dispatch(logoutError(error))

    })
    }