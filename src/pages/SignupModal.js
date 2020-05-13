import React ,{Component}from 'react'
import Modal from 'react-responsive-modal';
import {registerClientUser,registerTraderUser} from './redux/Action'
import { connect } from "react-redux"


class  SignupModal  extends Component{

    constructor(props){
        super(props)
       this.state={
            username:'',
            email:'',
            password:''
        }
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

                <div className="form-group">
                    <label>Username</label>
                    <input 
                    name="username"
                    type="text" 
                    className="form-control" 
                    value={this.state.username}
                onChange={this.changeHandler}
                    placeholder="First name" />
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
                       />
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
                       />
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
                    placeholder="Enter password"
                     />
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
                    placeholder="Enter password"
                     />
                </div>
              }

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
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
      fetching:state.Auth.isFetching
    }
}
const mapDispatchToProps={
  
      registerClientUser,
      registerTraderUser
    
  
}

export default connect (mapStateToProps,mapDispatchToProps)(SignupModal)