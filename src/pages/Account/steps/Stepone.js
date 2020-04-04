import React, { Component } from 'react'
import {Form}from 'react-bootstrap'

export default class Stepone extends Component {
  render() {
    
    const {values,handlechange,nextstep}=this.props
    return (
      <div>
            <div className="row">

                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Account Verification</h4>
                        <form className="forms-sample" >
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Phone</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="Enter phone"
                                size="lg"
                                name="phone"
                                value={values.phone} 
                                onChange={handlechange}/>
                        </Form.Group>
                      
                  
                        <button  variant="primary" className="btn btn-primary mr-2" onClick={nextstep} >Next</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
