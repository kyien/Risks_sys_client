import React, { Component } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'

export default class Deposit extends Component {


    state = {
        amount: '',
        phone:'',
        show:false
      };
     
      changeHandler = event => {
        //event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })

      }

      onSubmit=(event)=> {
            event.preventDefault()

          this.setState({show:true})

      }
    render() {
        return (
            <div>
                  <div className="page-header">
                    <h3 className="page-title"> Riskys Deposit </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Deposit</li>
                        </ol>
                    </nav>
                 </div>


                <div className="row">

                <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header closeButton>
                        <Modal.Title>Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>STK PUSH initiated.check your phone for pin entrance!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Money Deposit Form</h4>
                <form className="forms-sample" onSubmit={this.onSubmit}>
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
                    <label htmlFor="exampleInputEmail1">Phone</label>
                    <Form.Control type="text" className="form-control" name="phone" value={this.state.phone}
                     id="exampleInputEmail1" placeholder="Phone Number" onChange={this.changeHandler}/>
                  </Form.Group>
                
                  <button type="submit" className="btn btn-primary mr-2" >Submit</button>
                </form>
              </div>
            </div>
          </div>
                </div>


            </div>
        )
    }
}
