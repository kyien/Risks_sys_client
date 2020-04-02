import React, { Component } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'

export default class Trades extends Component {


    state = {
        account_type: '',
        lot_size:'',
        p_allocation:'',
        mode:'',
        show:false
      }

      valuechange=(event)=>{

        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit=(event)=>{
        event.preventDefault()
        this.setState({show:true})
    }
     
  render() {
    return (
      <div>

                <div className="page-header">
                    <h3 className="page-title"> Trade Options </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                        <li className="breadcrumb-item active" aria-current="page">trade-options</li>
                        </ol>
                    </nav>
                 </div>

              <div className="row">



              <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header closeButton>
                        <Modal.Title>Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Information succuessfully submitted!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
                 <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Trade Options</h4>
                        <form className="forms-sample" onSubmit={this.onSubmit}>
                          <Form.Group>
                            <label htmlFor="exampleInputUsername1"> Account type</label>
                            <Form.Control as="select" custom name="account_type" value={this.state.account_type}  onChange={this.valuechange}>
                                <option value="">Select trading account type</option>
                                <option value="pamm">PAMM</option>
                                <option value="mamm"> MAMM</option>
                                <option value="hedge">HEdge Fund</option>
                                
                              </Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <label htmlFor="exampleInputEmail1">Lot size</label>
                            <Form.Control type="text" className="form-control" name="lot_size" value={this.state.lot_size}
                            id="exampleInputEmail1" placeholder="enter the lot size" onChange={this.valuechange}/>
                          </Form.Group>
                          <Form.Group>
                            <label htmlFor="exampleInputEmail1">Percent Allocation</label>
                            <Form.Control type="text" className="form-control" name="p_allocation" value={this.state.p_allocation}
                            id="exampleInputEmail1" placeholder="enter the percent allocation" onChange={this.valuechange}/>
                          </Form.Group>
                          <Form.Control as="select" custom  name="mode" value={this.state.mode}  onChange={this.valuechange}>
                                <option value="">Select mode</option>
                                <option value="multiplier">Multiplier</option>
                                <option value="fixed"> Fixed</option>
                                <option value="Risk">Risk</option>
                                <option value="equity">Equity</option>
                                
                              </Form.Control>
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
                            
                          <br/>
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
