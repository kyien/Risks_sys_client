import React, { Component } from 'react'
import Stepone from './steps/Stepone';
import Steptwo from './steps/Steptwo';
import Steptre from './steps/Steptre';

export default class Verification extends Component {

    state={
        step:1,
        phone:'',
        country:'',
        street:'',
        address:'',
        postal_code:'',
        pin_certificate:'',
        nationalId:'',
        show:false
    }

    nextstep = () =>{

        const { step } =this.state
        this.setState({step:step+1})
    }

    prevstep = () =>{

        const { step } =this.state
        this.setState({step:step-1})
    }
    

    handlechange=(event)=>{

        this.setState({[event.target.name]:event.target.value})

    }
  render() {
    const {step,phone,country,street,adress,postal_code,pin_certificate,nationalId} =this.state
    const values={phone,country,street,adress,postal_code,pin_certificate,nationalId}

    switch(step){
        case 1:
            return (
                <Stepone 
                nextstep={this.nextstep}
                handlechange={this.handlechange}
                values={values}
            />
            )

        case 2:
            return (
                <Steptwo
                     nextstep={this.nextstep}
                     prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                />
            )
        case 3:
                return (
                    <Steptre
                          prevstep={this.prevstep}
                            handlechange={this.handlechange}
                            values={values}
                    />
                )

         default:
                 return null
        

    }
  }
}
