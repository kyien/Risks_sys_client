import React, { Component } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'

export default class Withdraw extends Component {


    state = {
        amount: '',
        payment_option:'',
        acc_no:'',
        email:'',
        phone:'',
        show:false
      };
     
      changeHandler = event => {
        //event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })

      }

        onsubmit=(event)=>{
            event.preventDefault()
            this.setState({show:true})
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
                        <Modal.Body>Withdrawal processing Initiated...</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
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
                          onChange={this.changeHandler}/>
                  </Form.Group>
                 
                  <Form.Group>
                  <label htmlFor="exampleInputUsername1">Payment Platform</label>
                            <Form.Control as="select" custom="true"  name="payment_option" value={this.state.payment_option}  onChange={this.changeHandler}>
                            <option  value="">Select Payment option </option>
                            <option  value="paypal">Paypal </option>
                            <option value="M-PESA">M-PESA</option>
                            <option value="pesa_link">Pesa Link</option>
                            <option value="card">MASTER/VISA</option>
      
                              </Form.Control>
                  </Form.Group>

                  {this.state.payment_option ? PaymentSwitch() : null}
                 
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
                </div>


            </div>
        )
    }
}
