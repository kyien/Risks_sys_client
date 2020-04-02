import React, { Component } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'

export default class Withdraw extends Component {


    state = {
        amount: '',
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
                 
                  {/* <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                    <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                  </Form.Group> */}
                  {/* <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div> */}
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  {/* <button className="btn btn-light">Cancel</button> */}
                </form>
              </div>
            </div>
          </div>
                </div>


            </div>
        )
    }
}
