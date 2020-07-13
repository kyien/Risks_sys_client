import React, { Component } from 'react'
// import Stepone from './steps/Stepone';
import Steptwo from './steps/Steptwo';
// import Steptre from './steps/Steptre';
import axios from 'axios'
import {connect} from 'react-redux'

 class Verification extends Component {

    state={
        step:1,
        phone:'',
        country:'',
        street:'',
        area:'',
        address:'',
        postal_code:'',
        poa:null,
        poi:null,
        myfile:'',
        response:'',
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

    filechange =(event)=>{
        this.setState({
            myfile: event.target.files[0],
          })
    }

    file1upload=(event)=>{

        this.setState({poa:event.target.files[0]})

    }
    file2upload=(event)=>{

        this.setState({ poi:event.target.files[0]})

    }
    onsubmit=async(event)=>{
        event.preventDefault()
        const data = new FormData()
        data.append('id', this.props.AuthUser.id)
        data.append('phone', this.state.phone)
        data.append('country', this.state.country)
        data.append('area', this.state.area)
        data.append('street', this.state.street)
        data.append('address', this.state.address)
        data.append('postal_code', this.state.postal_code)
        data.append('poi', this.state.poi)
        data.append('poa', this.state.poa)
        console.log(this.state.poa.name+' '+this.state.poi)
        await axios.post('https://api.sortika.com/trader/documents/verify',data).then((res)=>{
            console.log(res)
            this.setState({response:res.data.message,show:true})
        }).catch((err)=>{
            console.log(err.response.data)
                if(err.response.data){
                    this.setState({response:err.response.data.error,show:true})
                }
        })
        this.setState({show:true})
    }
  render() {
    const {step,phone,country,street,adress,postal_code,poa,poi,area,response} =this.state
    const values={phone,country,street,adress,postal_code,area,poa,poi,response}




    return (
        <Steptwo
            //  nextstep={this.nextstep}
            //  prevstep={this.prevstep}
                handlechange={this.handlechange}
                // handlefilechange={this.handlefilechange}
                values={values}
                submit={this.onsubmit}
                modalshow={this.state.show}
                modalhide={()=>this.setState({show:false})}
                fileup1={this.file1upload}
                mychange={this.filechange}
                fileup2={this.file2upload}
        />
    // switch(step){
        // case 1:
        //     return (
        //         <Stepone 
        //         nextstep={this.nextstep}
        //         handlechange={this.handlechange}
        //         values={values}
        //     />
        //     )

    //     case 1:
            
    //         )
    //     case 3:
    //             return (
    //                 <Steptre
    //                       prevstep={this.prevstep}
    //                         handlechange={this.handlechange}
    //                         values={values}
    //                         submit={this.onsubmit}
    //                         modalshow={this.state.show}
    //                         modalhide={()=>this.setState({show:false})}
    //                 />
    //             )

    //      default:
    //              return null
        

    // }
    )
  }
}

const mapStateToProps=(state)=>{
    return{
      AuthUser:state.Auth.user, 
      Token:state.Auth.token ,
      bal:state.Auth.trader_acc_balance
  
    }
  }

  export default connect(mapStateToProps)(Verification)