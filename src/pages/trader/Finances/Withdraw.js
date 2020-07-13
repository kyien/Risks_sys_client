import React, { Component } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'
import { connect } from "react-redux"
import {TraderWithdraw} from '../../redux/Action'
import SimpleReactValidator from 'simple-react-validator';

 class Withdraw extends Component {

  constructor(){
    super()
    this.state = {
        amount: '',
        payment_option:'',
        acc_no:'',
        email:'',
        phone:'',
        message:'',
        show:false
      }

      this.validator = new SimpleReactValidator()

    }
      changeHandler = event => {
        //event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })

      }

        onsubmit=async (event)=>{
            event.preventDefault()
            if(this.state.amount > this.props.bal){
              this.setState({show:true,message:'You cannot withdraw more than your wallet balance'})

            }
            else{
            await this.props.TraderWithdraw(this.state.amount,this.props.AuthUser.id)
                 
            this.setState({show:true,message:'Your request to withdraw was successful!'})
            }
        }
    render() {

      const PaymentSwitch=()=>{

        switch(this.state.payment_option){

            case 'M-PESA':
              return(

                <Form.Group>
                <label htmlFor="exampleInputUsername1">Phone No</label>
                <Form.Control
                 type="text"
                  id="exampleInputUsername1"
                   placeholder="Enter valid mpesa phone."
                    size="lg"
                    name="phone"
                     value={this.state.phone} 
                      onChange={this.changeHandler}
            
                      />
              </Form.Group>

              )

              case 'paypal':
                return(
                  <Form.Group>
                  <label htmlFor="exampleInputUsername1">Paypal Email</label>
                  <Form.Control
                   type="text"
                    id="exampleInputUsername1"
                     placeholder="Enter your paypal email"
                      size="lg"
                      name="email"
                       value={this.state.email} 
                        onChange={this.changeHandler}
              
                        />
                </Form.Group>
                )

                default:
                  return(

              <Form.Group>
              <label htmlFor="exampleInputUsername1">Account No</label>
              <Form.Control
               type="text"
                id="exampleInputUsername1"
                 placeholder="Enter Bank Account no."
                  size="lg"
                  name="acc_no"
                   value={this.state.acc_no} 
                    onChange={this.changeHandler}
          
                    />
            </Form.Group>
                  )
        }
      }
        return (
            <div>
                  <div className="page-header">
                    <h3 className="page-title"> Risksys Withdrawal</h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Form elements</li>
                        </ol>
                    </nav>
                 </div>


                <div className="row">

                <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header closeButton>
                        <Modal.Title>withdrawal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.message}</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false,amount:''})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Withdraw Form</h4>
                <form className="forms-sample" onSubmit={this.onsubmit}>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Amount</label>
                    <Form.Control
                     type="text"
                      id="exampleInputUsername1"
                       placeholder="Enter Amount"
                        size="lg"
                        name="amount"
                         value={this.state.amount} 
                         onFocus={()=>this.validator.showMessageFor('amount')}
                          onChange={this.changeHandler}/>
                  </Form.Group>
                  {this.validator.message('amount', this.state.amount, 'required|numeric|min:0')}

                  {/* <Form.Group>
                  <label htmlFor="exampleInputUsername1">Payment Platform</label>
                            <Form.Control as="select" custom="true"  name="payment_option" value={this.state.payment_option}  onChange={this.changeHandler}>
                            <option  value="">Select Payment option </option>
                            <option  value="paypal">Paypal </option>
                            <option value="M-PESA">M-PESA</option>
                            <option value="pesa_link">Pesa Link</option>
                            <option value="card">MASTER/VISA</option>
      
                              </Form.Control>
                  </Form.Group>

                  {this.state.payment_option ? <PaymentSwitch/> : null} */}
                 
                  {this.validator.allValid() ?
                  <button type="submit" className="btn btn-primary mr-2" >Submit</button>
                  : 
                  <button type="submit" className="btn btn-primary mr-2" disabled>Submit</button>

                  }                
                  </form>
              </div>
            </div>
          </div>
                </div>


            </div>
        )
    }
}

const mapStateToProps=(state)=>{
  return{
    AuthUser:state.Auth.user, 
    Token:state.Auth.token ,
    bal:state.Auth.trader_acc_balance

  }
}
const mapDispatchToProps={
  
  TraderWithdraw


}

export default connect(mapStateToProps,mapDispatchToProps)(Withdraw)