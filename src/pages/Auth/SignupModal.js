import React ,{Component}from 'react'
import Modal from 'react-responsive-modal';
import {registerClientUser,registerTraderUser} from '../redux/Action'
import { connect } from "react-redux"
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios'


class  SignupModal  extends Component{

    constructor(props){
        super(props)
       this.state={
            username:'',
            email:'',
            password:''
        }
        this.validator = new SimpleReactValidator(
        //     {
        //     validators: {
        //         client_email_exists: {  // name the rule
        //           message: 'This email already exists ',
        //           rule: async (val, params, validator) => {
        //                  return this.check_email(val)
        //           }
               
        //         }
        //       }            
        // }
        );
    }

    async check_email(value){
        
        if(this.props.type === 'client'){
            // if()
    await axios.post('https://api.sortika.com/client/check_mail',{
        email:value
    }).then((res)=>{
        console.log(res.data.exists)
        if(res.data.exists == 1){
        return true
        }
        else{
            return false
        }
    }).catch(error=>console.log(error))
        }

        else{

            await axios.post('https://api.sortika.com/trader/check_mail',{
                email:value
            }).then((res)=>{
                console.log(res.data.exists)
                if(res.data.exists == 1){
                return true
                }else{
                    return false
                }
            }).catch(error=>console.log(error))
        }


        // return exists;

}

    submitClientHandler =async(event) => {
    
        event.preventDefault()
        // this.setState({loading:true})
        await this.props.registerClientUser(this.state.username,this.state.email,this.state.password)
       
        
      }

      submitTraderHandler =async(event) => {
        //   console.log('start......')
        //   console.log(this.state.email)
        event.preventDefault()
        // this.setState({loading:true})
        await this.props.registerTraderUser(this.state.username,this.state.email,this.state.password)
       
        
      }


      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
  
render(){
     
    
    return(
        
        <Modal open={this.props.open} onClose={this.props.close} center>
    
    <form className="signup"  onSubmit={this.props.type === 'trader' ?this.submitTraderHandler : this.submitClientHandler}  noValidate>
                <h3>Sign Up</h3>
                <br/>
            {this.props.err? <div className="alert alert-danger" role="alert">
                        {this.props.err}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                   </div>: null
                   }
                   {
                       this.props.success_message ?
                       <div className="alert alert-success" role="alert">
                        {this.props.err}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                   </div>: null
                   }
                   <br/>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                    name="username"
                    type="text" 
                    className="form-control" 
                    value={this.state.username}
                onChange={this.changeHandler}
                onBlur={()=>this.validator.showMessageFor('username')}
                    placeholder="First name" />
                {this.validator.message('username', this.state.username, 'required|alpha_num_space|max:12|min:6')}

                </div>

              {this.props.type == 'trader'? 
              <div className="form-group">
                    <label> Your Myfx Email address</label>
                    <input 
                    name="email"
                    type="email"
                     className="form-control"
                      placeholder="Enter email"
                      value={this.state.email}
                onChange={this.changeHandler}
                onBlur={()=>this.validator.showMessageFor('email')}
                       />
   {this.validator.message('email', this.state.email, 'required|email')}

                </div>
                 :
                 <div className="form-group">
                    <label>Email address</label>
                    <input 
                    name="email"
                    type="email"
                     className="form-control"
                      placeholder="Enter email"
                      value={this.state.email}
                onChange={this.changeHandler}
                onBlur={()=>this.validator.showMessageFor('email')}
                       />
            {this.validator.message('email', this.state.email, 'required|email')}

                </div>

              }

              {this.props.type == 'trader'
              ? 
                <div className="form-group">
                    <label>Your Myfx Password</label>
                    <input 
                    name="password"
                    type="password" 
                    className="form-control" 
                    value={this.state.password}
                onChange={this.changeHandler}
                onBlur={()=>this.validator.showMessageFor('password')}
                    placeholder="Enter password"
                     />
           {this.validator.message('password', this.state.password, 'required|max:12|min:6')}

                </div>
                :
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                    type="password" 
                    className="form-control" 
                    value={this.state.password}
                onChange={this.changeHandler}
                onBlur={()=>this.validator.showMessageFor('password')}
                    placeholder="Enter password"
                     />
          {this.validator.message('password', this.state.password, 'required|max:12|min:6')}

                </div>
              }

                {
                    this.props.fetching ?

                <button className="btn btn-primary btn-block" type="button" disabled>
                Processing....
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    
                </button>
                :
                    this.validator.allValid() ?
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                :
                <button type="submit" className="btn btn-primary btn-block" disabled>Sign Up</button>
                }
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={this.props.link}>sign in?</a>
                </p>
            </form>
            
</Modal>

             

    )
}
}

const mapStateToProps=(state)=>{
    return{
      fetching:state.Auth.isFetching,
      err:state.Auth.errorMessage,
      success_message:state.Auth.successMessage
    }
}
const mapDispatchToProps={
  
      registerClientUser,
      registerTraderUser
    
  
}

export default connect (mapStateToProps,mapDispatchToProps)(SignupModal)