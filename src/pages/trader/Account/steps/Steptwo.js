import React, { Component } from 'react'
import {Form}from 'react-bootstrap'
import Countries from '../countries.json'

export default class Steptwo extends Component {
    state={
        countries:Countries
    }
  render() {
    const {values,handlechange,prevstep,nextstep}=this.props
    return (
      <div>
            <div className="row">

                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Account Verification</h4>
                        <form className="forms-sample" >
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>country</strong></label>
                            <Form.Control as="select" custom  name="country" value={values.country}  onChange={handlechange}>
                            <option  value="">Select country</option>

                            {this.state.countries.map((country,index)=>{

                          return <option key={index} value={country.name}>{country.name}</option> 
                              
                                 
                            })}
                                
                                
                              </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>street</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="street"
                                size="lg"
                                name="street"
                                value={values.street} 
                                onChange={handlechange}/>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>address</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="Address"
                                size="lg"
                                name="address"
                                value={values.address} 
                                onChange={handlechange}/>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Postal Code</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="Postal Code"
                                size="lg"
                                name="postal_code"
                                value={values.postal_code} 
                                onChange={handlechange}/>
                        </Form.Group>
                      
                  
                        <button variant="primary"  className="btn btn-primary mr-2" onClick={prevstep}>Previous</button>
                        <button variant="primary"  className="btn btn-primary mr-2" onClick={nextstep}>Next</button>
                        </form>
                    </div>
                    </div>
                </div>
           
           
           
            </div>
      </div>
    )
  }
}
