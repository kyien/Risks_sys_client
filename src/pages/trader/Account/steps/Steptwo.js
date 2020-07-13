import React, { Component } from 'react'
import {Form,Modal,Button}from 'react-bootstrap'
import Countries from '../countries.json'
import bsCustomFileInput from 'bs-custom-file-input';

export default class Steptwo extends Component {

  constructor(){
    super()
    this.state={
        countries:Countries
    }
    this.fileInput = React.createRef();

  }


    componentDidMount() {
      bsCustomFileInput.init()
    }

  render() {
    const {values,handlechange,fileup1,fileup2,submit,modalshow,modalhide,mychange}=this.props
    return (
      <div>
            <div className="row">

            <Modal show={modalshow} onHide={modalhide}>
                        <Modal.Header closeButton>
                        <Modal.Title>Document Verification</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{values.response}</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={modalhide}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>

                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Account Verification</h4>
                        <form className="forms-sample" encType="multipart/form-data" onSubmit={submit}>

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
                      

                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>country</strong></label>
                            <Form.Control as="select" name="country" value={values.country}  onChange={handlechange}>
                            <option  value="">Select country</option>

                            {this.state.countries.map((country,index)=>{

                          return <option key={index} value={country.name}>{country.name}</option> 
                              
                                 
                            })}
                                
                                
                              </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Area/town</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="area"
                                size="lg"
                                name="area"
                                value={values.area} 
                                onChange={handlechange}/>
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
                      
{/*                   
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Proof of Identity document(ID/PASSPORT/DRIVING LICENSE)</strong></label>
                          
                                <div className="custom-file">
                                <input id="inputGroupFile01" ref={this.fileInput} type="file" value={values.poi} className="custom-file-input" name="poi" onChange={fileup2}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">upload document</label>
                                </div>
                            
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Proof of Address document</strong></label>
                          
                                <div className="custom-file">
                                <input id="inputGroupFile01" ref={this.fileInput} type="file" value={values.poa} className="custom-file-input" name="poa" onChange={fileup1}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">upload document</label>
                                </div>
                        </Form.Group> */}
                        <div className="form-group">
                        <label htmlFor="exampleInputUsername1"><strong>Proof of Identity document(ID/PASSPORT/DRIVING LICENSE)</strong></label>
                                <input type="file" className="form-control-file" name="poa" onChange={fileup1} id="exampleFormControlFile1"/>
                              </div>
                              <br/>
                        <div className="form-group">

                        <label htmlFor="exampleInputUsername1"><strong>Proof of Address document</strong></label>
                                <input type="file" className="form-control-file" name="poi" onChange={fileup2} id="exampleFormControlFile1"/>
                              </div>

{/*                         
    
                              <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Proof of Address" />
                              </Form.Group> */}
                              
                        {/* <button  className="btn btn-primary mr-2" onClick={prevstep}>Previous</button> */}
                        <button type="submit" className="btn btn-primary mr-2"  >Submit</button>
                        </form>
                        
                        
                    </div>
                    </div>
                </div>
           
           
           
            </div>
      </div>
    )
  }
}
