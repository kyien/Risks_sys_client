import React, { Component } from 'react'
import {Form,Modal,Button}from 'react-bootstrap'
import bsCustomFileInput from 'bs-custom-file-input';

export default class Steptre extends Component {

    state={
        show:false
    }

   

    componentDidMount() {
        bsCustomFileInput.init()
      }

  render() {

    const {values,handlechange,prevstep,submit,modalshow,modalhide}=this.props

    return (
        <div>
      <div  className="row">

                

        <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Account Verification</h4>
                        <form className="forms-sample" enctype="multipart/form-data" >
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Proof of Identity (ID/PASSPORT/DRIVING LICENSE)</strong></label>
                          
                                <div className="custom-file">
                                <input id="inputGroupFile01" type="file" value={values.poi} className="custom-file-input" name="poi" onChange={handlechange}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">upload document</label>
                                </div>
                            
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Proof of Address</strong></label>
                          
                                <div className="custom-file">
                                <input id="inputGroupFile01" type="file" value={values.poa} className="custom-file-input" name="poa" onChange={handlechange}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">upload tax certificate</label>
                                </div>
                        </Form.Group>
                        
                        <button  className="btn btn-primary mr-2" onClick={prevstep}>Previous</button>
                        <button type="submit" className="btn btn-primary mr-2" onClick={submit} >Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
           
            </div>
      </div>
    )
  }
}
