import React, { Component } from 'react'
import {Form,Modal,Button}from 'react-bootstrap'

export default class Steptwo extends Component {
  state={
    show:false
}

onsubmit=(event)=>{
    event.preventDefault()

    this.setState({show:true})
}
  render() {
    const {values,handlechange,prevstep}=this.props
    return (
      <div>
            <div className="row">



                <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header closeButton>
                        <Modal.Title>Live Trade</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Trade placed succesfully!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>

                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Live trade</h4>
                        <form className="forms-sample" >
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Time Frame</strong></label>
                            <Form.Control as="select" custom  name="time_frame" value={values.time_frame}  onChange={handlechange}>
                            <option  value="">Select time frame</option>
                              <option value="30s">30 seconds</option>
                              <option value="1 min">1 minute</option>
                              <option value="5 min">5 minutes</option>
                              <option value="30 min">30 minutes</option>
                              <option value="60 min">60 minutes</option>
                              <option value="4 hrs">4 hours</option>
                              <option value="24 hrs">24 hours</option>
                              <option value="7 days">7 days</option>
                                                  
                                
                              </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Comment:</strong></label>
                            <textarea className="form-control" value={values.comment} name="comment" id="exampleTextarea1" rows="4"></textarea>

                        </Form.Group>
                       
                      
                  
                        <button variant="primary"  className="btn btn-primary mr-2" onClick={prevstep}>Previous</button>
                        <button type="submit" className="btn btn-primary mr-2" onClick={this.onsubmit} >Submit</button>

                        </form>
                    </div>
                    </div>
                </div>
           
           
           
            </div>
      </div>
    )
  }
}
