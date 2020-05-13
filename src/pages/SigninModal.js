import React,{Component}from 'react'
import Modal from 'react-responsive-modal';
import {loginClientUser,loginTraderUser} from './redux/Action'
import { connect } from "react-redux"


class  LoginModal extends Component{
constructor(props){
    super(props)
    this.state={
        email:'',
        password:''
    }
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
  
    render(){
    return(
        <Modal open={this.props.open} onClose={this.props.close}  center>
    
      <form className="signin" 
      onSubmit={this.props.type === 'trader' ?this.submitTraderHandler : this.submitClientHandler}
                  noValidate>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                    name="email"
                    type="email"
                     className="form-control"
                     value={this.state.email}
                     onChange={this.changeHandler}
                      placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    name="password"
                        type="password" 
                     className="form-control"
                     value={this.state.password}
                     onChange={this.changeHandler}
                    placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign in </button>
                <div className="footer-links">
                <p className="forgot-password text-right">
                    Not a member? <a href="#" onClick={this.props.link}>sign up</a>
                </p>
                <p className="forgot-password text-left">
                    Forgot password?<a href="#">click here</a>
                </p></div>
            </form>
            
</Modal>
    )
    }
}

const mapStateToProps=(state)=>{
    return{
      fetching:state.Auth.isFetching
    }
}
const mapDispatchToProps={
  
      loginTraderUser,
      loginClientUser
    
  
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginModal)