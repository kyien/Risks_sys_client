import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import { connect } from "react-redux"
import SimpleReactValidator from 'simple-react-validator';
import {submitForgotemailClient,submitForgotemailTrader} from '../redux/Action'

 class Forgot extends Component {
    constructor(props){
        super(props)
        this.state={
            forgot_email:'',
            success:null
        }
      
        this.validator = new SimpleReactValidator()
    }

    submitEmailTrader =async(event) => {
        // console.log('trader....')

        event.preventDefault()
        
        await this.props.submitForgotemailTrader(this.state.forgot_email)

        
    }
    submitEmailClient =async(event) => {
        // console.log('client....')
        event.preventDefault()

        await this.props.submitForgotemailClient(this.state.forgot_email)
    }
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
  render() {
    return (
        <Modal open={this.props.open} onClose={this.props.close}  center>
                <br/>
        <form className="forgot_password" 
        onSubmit={this.props.type === 'trader' ?this.submitEmailTrader:this.submitEmailClient}
                    noValidate>
                  <h3>Forgot Password ?</h3>

                  {this.props.err_message? <div className="alert alert-danger" role="alert">
                        {this.props.err_message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                   </div>: 
                   null
                   }
                   {this.props.success_message ? <div className="alert alert-success" role="alert">
                        {this.props.success_message}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                   </div>: null}
  
                  <div className="form-group">
                      <label>Enter your Email address</label>
                      <input 
                      name="forgot_email"
                      type="text"
                       className="form-control"
                       value={this.state.forgot_email}
                       onChange={this.changeHandler}
                       onFocus={()=>this.validator.showMessageFor('forgot_email')}
                        placeholder="Enter your email" />

                  </div>
                  {this.validator.message('forgot_email', this.state.forgot_email, 'required|email')}
  
                  <br/>
  
               {  
                 this.props.fetching ?

                <button className="btn btn-primary" type="button" disabled>
                  Processing....
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    
                  </button>
               :  
                  this.validator.allValid() ?
                      <button type="submit" className="btn btn-primary btn-lg">Submit </button>
                      :
                      <button type="submit" className="btn btn-primary btn-lg" disabled>Submit </button>
                 
                  

                 }
                 
              </form>
              <br/>
              {/* {this.props.fetching ?
              <div className="spinner-border text-primary" role="status">
            </div>: null} */}
  </Modal>
    )
  }
}

const mapStateToProps=(state)=>{
    return{
      fetching:state.stateReducer.isFetching,
      error:state.stateReducer.hasError,
      err_message:state.stateReducer.errorMessage,
      success_message:state.stateReducer.responseMessage

    }
}
const mapDispatchToProps={
  
    submitForgotemailClient,
    submitForgotemailTrader
   
  

}

export default connect(mapStateToProps,mapDispatchToProps)(Forgot)