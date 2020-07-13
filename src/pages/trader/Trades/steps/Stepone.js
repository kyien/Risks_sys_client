import React, { Component } from 'react'
import {Form,Modal,Button}from 'react-bootstrap'
import SimpleReactValidator from 'simple-react-validator';

// import Forex from '../Data/forex.json'
// import Crypto from '../Data/crypto.json'
// import Indices from '../Data/indices.json'
// import Commodities from '../Data/commodities.json'
import axios from 'axios'


export default class Stepone extends Component {

  constructor(){
    super()
  this.state={
    // forex:Forex,
    // crypto:Crypto,
    // indices:Indices,
    assets:null,
    // commodities:Commodities
  }

  this.validator = new SimpleReactValidator()

  }
  async componentDidMount(){

    await axios.get('http://risk-api.sortika.com/api/v1/settings/assets',
    {
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }
    ).then((res)=>{
      console.log(res.data)
      this.setState({assets:res.data.data})
    }).catch((error)=>{
      console.log(error)
      // dispatch(assets_err(error))
    })
  }

  render() {
   
    const {values,handlechange,submit,nextstep,modalshow,hide}=this.props

    
    return (
      <div>
            <div className="row">


                <Modal show={modalshow} onHide={hide}>
                        <Modal.Header closeButton>
                        <Modal.Title>Live Trade</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p >
                          {values.response}
                          </p>

                          {values.errors ? values.errors.map((err,index)=>{

                            return <span className="alert-danger" key={index}>{err}</span> 
                          })
                          : null
                          }
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={hide}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>

                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Live Trade</h4>
                        <form className="forms-sample" >
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Asset:</strong></label>
                            <Form.Control as="select"   name="asset"
                             value={values.asset} 
                             onFocus={()=>this.validator.showMessageFor('asset')}
                             onChange={handlechange}>
                            <option  value="">Select asset</option>
                              {/* <option value="forex">Forex</option>
                              <option value="indices">Indices</option>
                              <option value="commodities">Commodities</option>
                              <option value="cypto_currency">CryptoCurrency</option>
         */}
                                {this.state.assets ? this.state.assets.map((ix,index)=>{

                        return <option key={index} value={ix.name}>{ix.name}</option> 
                            
                              
                          })
                          : null }
                                                      </Form.Control>
                        </Form.Group>
                        {this.validator.message('asset', values.asset, 'required')}


                        {/* {values.asset_type ? <AssetSwitch/> : null} */}

                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Entry Price:</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="entry price"
                                size="lg"
                                name="entry_price"
                                value={values.entry_price} 
                                onFocus={()=>this.validator.showMessageFor('entry_price')}
                                onChange={handlechange}/>
                        </Form.Group>
                        {this.validator.message('entry_price', values.entry_price, 'required')}

                      
                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Stop Loss 1:</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="stop_loss 1"
                                size="lg"
                                name="stop_loss1"
                                value={values.stop_loss1} 
                                onFocus={()=>this.validator.showMessageFor('stop_loss1')}
                                onChange={handlechange}/>
                        </Form.Group>
                        {this.validator.message('stop_loss1', values.stop_loss1, 'required')}

                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Signal Type:</strong></label>
                            <Form.Control as="select"  
                            onFocus={()=>this.validator.showMessageFor('signal_type')}
                             name="signal_type" value={values.signal_type}  onChange={handlechange}>
                            <option  value="">select signal type</option>
                            <option  value="BL">Buy Limit</option>
                              <option value="SL">Sell Limit</option>
                              <option value="BS">Buy stop</option>
                              <option value="SS">Sell stop</option>
        
                              </Form.Control>
                        </Form.Group>
                        {this.validator.message('signal_type', values.signal_type, 'required')}

                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Take Profit 1(Tp1):</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="Take Profit 1"
                                size="lg"
                                name="tp1"
                                value={values.tp1} 
                                onFocus={()=>this.validator.showMessageFor('tp1')}
                                onChange={handlechange}/>
                        </Form.Group>
                        {this.validator.message('tp1', values.tp1, 'required')}

                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Take Profit 2 (Tp2):</strong></label>
                            <Form.Control
                            type="text"
                            id="exampleInputUsername1"
                            placeholder="Take Profit 2"
                                size="lg"
                                name="tp2"
                                value={values.tp2} 
                                onFocus={()=>this.validator.showMessageFor('tp2')}
                                onChange={handlechange}/>
                        </Form.Group>
                        {this.validator.message('tp2', values.tp2, 'required')}

                        <Form.Group>
                            <label htmlFor="exampleInputUsername1"><strong>Time Frame</strong></label>
                            <Form.Control as="select"  name="time_frame"
                           onFocus={()=>this.validator.showMessageFor('time_frame')} 
                            value={values.time_frame}  onChange={handlechange}>
                            <option  value="">Select time frame</option>
                              <option value="1H">1 hour</option>
                              <option value="4H">4 hours</option>
                              <option value="1D">24 hours(ONE DAY)</option>
                              <option value="1W">7 days(ONE WEEK)</option>
                              <option value="1M">ONE MONTH</option>
                                                  
                                
                              </Form.Control>
                        </Form.Group>
                        {this.validator.message('time_frame', values.time_frame, 'required')}

                        {/* <button  variant="primary" className="btn btn-primary mr-2" onClick={nextstep} >Next</button> */}
                       {
                         this.validator.allValid() ?
                         <button type="submit" className="btn btn-primary mr-2" onClick={submit} >Submit</button>
                          :
                          <button type="submit" className="btn btn-primary mr-2" onClick={submit} disabled >Submit</button>

                       }

                        </form>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    )


    
  }
}
