import React, { Component } from 'react'
import { Form,Modal,Button } from 'react-bootstrap'

export default class Trades extends Component {


    state = {
        account_type: '',
        asset:'',
        trader:'',
        risk:'',
        amount:'',
        show:false
      }

      valuechange=(event)=>{

        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit=(event)=>{
        event.preventDefault()
        this.setState({show:true})
    }
     
  render() {

    const PAMM=()=>{

      // if(this.state.payment_option =='PAMM' ){

          
            return(
              <div>
               <Form.Group>
              <Form.Control as="select" custom="true" name="asset" value={this.state.asset}  onChange={this.valuechange}>
              <option value="">Select Asset</option>
              <option value="gold">Gold</option>
              <option value="oil"> Oil</option>
              <option value="forex">Forex</option>
              
            </Form.Control></Form.Group>
               <Form.Group>
              <Form.Control as="select" custom="true" name="trader" value={this.state.trader}  onChange={this.valuechange}>
              <option value="">Select Trader</option>
              <option value="T-A">Trader 1   65% success rate</option>
              <option value="T-B">Trader 2  75% success rate</option>
              <option value="T-C">Trader 3   70% success rate</option>
              
            </Form.Control></Form.Group>
              <Form.Group>
              <label htmlFor="exampleInputUsername1"> % Risk</label>
              <Form.Control
               type="text"
                id="exampleInputUsername1"
                 placeholder="Enter the % risk for this account"
                  size="lg"
                  name="phone"
                   value={this.state.risk} 
                    onChange={this.valuechange}
          
                    />
            </Form.Group>
            </div>
            )

            // }
                
      
    }

    return (
      <div>

                <div className="page-header">
                    <h3 className="page-title"> Trade Options </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                        <li className="breadcrumb-item active" aria-current="page">trade-options</li>
                        </ol>
                    </nav>
                 </div>

              <div className="row">



              <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header closeButton>
                        <Modal.Title>Deposit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Information succuessfully submitted!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
                 <div className="col-md-6 offset-md-3 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Trade Options</h4>
                        <form className="forms-sample" onSubmit={this.onSubmit}>
                          <Form.Group>
                            <label htmlFor="exampleInputUsername1"> Account type</label>
                            <Form.Control as="select" custom="true" name="account_type" value={this.state.account_type}  onChange={this.valuechange}>
                                <option value="">Select trading account type</option>
                                <option value="pamm">PAMM</option>
                                <option value="mamm"> MAMM</option>
                                <option value="hedge">HEdge Fund</option>
                                
                              </Form.Control>
                          </Form.Group>

                              {this.state.account_type == 'pamm' ? <PAMM /> :null}
                         

                              <Form.Group>
                                  <label htmlFor="exampleInputUsername1">Amount to allocate</label>
                                  <Form.Control
                                  type="text"
                                    id="exampleInputUsername1"
                                    placeholder="Enter amount to trade with "
                                      size="lg"
                                      name="amount"
                                      value={this.state.amount} 
                                        onChange={this.valuechange}
                              
                                        />
                                </Form.Group>
                        
                            
                          <br/>
                          <button type="submit" className="btn btn-primary mr-2" >Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>

              </div>

        
      </div>
    )
  }
}
