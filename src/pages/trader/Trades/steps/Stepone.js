import React, { Component } from 'react'
import {Form}from 'react-bootstrap'
import Forex from '../Data/forex.json'
import Crypto from '../Data/crypto.json'
import Indices from '../Data/indices.json'
import Commodities from '../Data/commodities.json'

export default class Stepone extends Component {

  state={
    forex:Forex,
    crypto:Crypto,
    indices:Indices,
    commodities:Commodities
  }

  render() {
   
    const {values,handlechange,nextstep}=this.props



    const AssetSwitch=()=>{



      switch(values.asset_type){

          case 'forex':
            return(

              <Form.Group>
              <label htmlFor="exampleInputUsername1">Forex:</label>
              <Form.Control as="select"  name="asset" value={values.asset}  onChange={handlechange}>
                            <option  value="">Select forex</option>

                            {this.state.forex.map((ix,index)=>{

                          return <option key={index} value={ix.name}>{ix.name}</option> 
                              
                                 
                            })}
                            </Form.Control>
            </Form.Group>

            )

            case 'indices':
              return(
                <Form.Group>
                <label htmlFor="exampleInputUsername1">Indices :</label>
                <Form.Control as="select"   name="asset" value={values.asset}  onChange={handlechange}>
                            <option  value="">Select index</option>

                            {this.state.indices.map((ix,index)=>{

                          return <option key={index} value={ix.name}>{ix.name}</option> 
                              
                                 
                            })}
                            </Form.Control>
              </Form.Group>
              )
            case 'cypto_currency':
              return(
                <Form.Group>
                <label htmlFor="exampleInputUsername1">Crypto :</label>
                <Form.Control as="select"   name="asset" value={values.asset}  onChange={handlechange}>
                            <option  value="">Select Crypto</option>

                            {this.state.crypto.map((ix,index)=>{

                          return <option key={index} value={ix.name}>{ix.name}</option> 
                              
                                 
                            })}
                            </Form.Control>
              </Form.Group>
              )

              default:
                return(

            <Form.Group>
            <label htmlFor="exampleInputUsername1">Commodities :</label>
            <Form.Control as="select"   name="asset" value={values.asset}  onChange={handlechange}>
                            <option  value="">Select Commodity</option>

                            {this.state.commodities.map((ix,index)=>{

                          return <option key={index} value={ix.name}>{ix.name}</option> 
                              
                                 
                            })}
                            </Form.Control>
          </Form.Group>
                )
      }
    }
    
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
                            <Form.Control as="select"   name="asset_type" value={values.asset_type}  onChange={handlechange}>
                            <option  value="">Select asset</option>
                              <option value="forex">Forex</option>
                              <option value="indices">Indices</option>
                              <option value="commodities">Commodities</option>
                              <option value="cypto_currency">CryptoCurrency</option>
        
                              </Form.Control>
                        </Form.Group>


                        {values.asset_type ? <AssetSwitch/> : null}

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
                            <label htmlFor="exampleInputUsername1"><strong>Signal Type:</strong></label>
                            <Form.Control as="select"   name="signal_type" value={values.signal_type}  onChange={handlechange}>
                            <option  value="">Buy Limit</option>
                              <option value="gold">Sell Limit</option>
                              <option value="oil">Buy stop</option>
                              <option value="currency">Sell stop</option>
        
                              </Form.Control>
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
