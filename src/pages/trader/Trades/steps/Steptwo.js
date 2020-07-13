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
                              <option value="1H">1 hour</option>
                              <option value="4H">4 hours</option>
                              <option value="1D">24 hours(ONE DAY)</option>
                              <option value="1W">7 days(ONE WEEK)</option>
                              <option value="1M">ONE MONTH</option>
                                                  
                                
                              </Form.Control>
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
