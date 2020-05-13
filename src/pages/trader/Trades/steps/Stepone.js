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
                        <h4 className="card-title">Live Trade</h4>
                        <form className="forms-sample" >
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Asset:</strong></label>
                            <Form.Control as="select" custom  name="asset" value={values.asset}  onChange={handlechange}>
                            <option  value="">Select asset</option>
                              <option value="gold">Gold</option>
                              <option value="oil">Oil</option>
                              <option value="currency">Currency</option>
        
                              </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Entry Price:</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="entry price"
                                size="lg"
                                name="entry_price"
                                value={values.entry_price} 
                                onChange={handlechange}/>
                        </Form.Group>
                      
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Stop Loss 1:</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="stop_loss 1"
                                size="lg"
                                name="stop_loss1"
                                value={values.stop_loss1} 
                                onChange={handlechange}/>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Stop Loss 2:</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="stop_loss 2"
                                size="lg"
                                name="stop_loss2"
                                value={values.stop_loss2} 
                                onChange={handlechange}/>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Take Profit 1(Tp1):</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="Take Profit 1"
                                size="lg"
                                name="tp1"
                                value={values.tp1} 
                                onChange={handlechange}/>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Take Profit 2 (Tp2):</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="Take Profit 2"
                                size="lg"
                                name="tp1"
                                value={values.tp1} 
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
