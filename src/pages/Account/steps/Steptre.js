import React, { Component } from 'react'
import {Form,Modal,Button}from 'react-bootstrap'
import bsCustomFileInput from 'bs-custom-file-input';

export default class Steptre extends Component {

    state={
        show:false
    }

    onsubmit=(event)=>{
        event.preventDefault()

        this.setState({show:true})
    }

    componentDidMount() {
        bsCustomFileInput.init()
      }

  render() {

    const {values,handlechange,prevstep}=this.props

    return (
        <div>
      <div  className="row">

                <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header closeButton>
                        <Modal.Title>Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Details sent</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>

        <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Account Verification</h4>
                        <form className="forms-sample" >
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1">Tax Certificate</label>
                            {/* <Form.File 
                                    id="custom-file-translate-scss"
                                    label="upload tax document"
                                    lang="en"
                                    custom
                                    name="pin_certificate"
                                value={values.pin_certificate} 
                                onChange={handlechange}/>
                                /> */}
                                <div class="custom-file">
                                <input id="inputGroupFile01" type="file" value={values.pin_certificate} className="custom-file-input" name="pin_certificate" onChange={handlechange}/>
                                <label class="custom-file-label" htmlFor="inputGroupFile01">upload tax document</label>
                                </div>
                            
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1">National ID</label>
                            {/* <Form.File 
                                    id="custom-file-translate-scss"
                                    label="upload national id"
                                    lang="en"
                                    custom
                                    name="nationalId"
                                value={values.nationalId} 
                                onChange={handlechange}/>
                                /> */}
                                <div class="custom-file">
                                <input id="inputGroupFile01" type="file" value={values.nationalId} className="custom-file-input" name="nationalId" onChange={handlechange}/>
                                <label class="custom-file-label" htmlFor="inputGroupFile01">upload national id</label>
                                </div>
                        </Form.Group>
                        
                        <button  className="btn btn-primary mr-2" onClick={prevstep}>Previous</button>
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
