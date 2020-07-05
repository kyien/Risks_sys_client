import React,{Component}from 'react'
import Modal from 'react-responsive-modal';
import {loginClientUser,loginTraderUser} from '../redux/Action'
import { connect } from "react-redux"
import SimpleReactValidator from 'simple-react-validator';

class  LoginModal extends Component{
constructor(props){
    super(props)
    this.state={
        email:'',
        password:''
    }
  
    this.validator = new SimpleReactValidator()
}

 
    submitClientHandler =async(event) => {
        event.preventDefault()
        // this.setState({loading:true})
        await this.props.loginClientUser(this.state.email,this.state.password)
       
        
      }
    submitTraderHandler =async(event) => {
        event.preventDefault()
        // this.setState({loading:true})
        await this.props.loginTraderUser(this.state.email,this.state.password)
       
        
      }

      changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      }

      clear_fields(){
          this.setState({email:'',password:''})
      }
  
    render(){
    return(
        <Modal open={this.props.open} onClose={this.props.close}  center>
    
      <form className="signin" 
      onSubmit={this.props.type === 'trader' ?this.submitTraderHandler : this.submitClientHandler}
                  noValidate>
                <h3>Sign In</h3>
                <br/>
            {this.props.error? <div className="alert alert-danger" role="alert">
                        {this.props.error}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                   </div>: null}
                   <br/>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    name="email"
                    type="email"
                     className="form-control"
                     value={this.state.email}
                     onChange={this.changeHandler}
                     onBlur={()=>this.validator.showMessageFor('email')}
                      placeholder="Enter email" />
                {this.validator.message('email', this.state.email, 'required|email')}
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                        type="password" 
                     className="form-control"
                     value={this.state.password}
                     onChange={this.changeHandler}
                     onBlur={()=>this.validator.showMessageFor('password')}
                    placeholder="Enter password" />
                </div>
                {this.validator.message('password', this.state.password, 'required')}

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                {
                    
                    this.props.fetching ?

                        <button className="btn btn-primary btn-block" type="button" disabled>
                        Processing....
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            
                        </button>
                        :
                    this.validator.allValid()?
                <button type="submit" className="btn btn-primary btn-block">Sign in </button>
                :
                <button type="submit" className="btn btn-primary btn-block" disabled>Sign in </button>
                }
                <div className="footer-links">
                <p className="forgot-password text-right">
                    Not a member? <a href="#" onClick={this.props.link}>sign up</a>
                </p>
                <p className="forgot-password text-left">
                    Forgot password?<a href="#" onClick={this.props.forgot}>click here</a>
                </p></div>
            </form>
            
</Modal>
    )
    }
}

const mapStateToProps=(state)=>{
    return{
      fetching:state.Auth.isFetching,
      error:state.Auth.errorMessage
    }
}
const mapDispatchToProps={
  
      loginTraderUser,
      loginClientUser
    
  
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginModal)