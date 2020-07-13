import React, { Component } from 'react'
import Stepone from './steps/Stepone';
import Steptwo from './steps/Steptwo';
import { connect } from "react-redux"
import axios from 'axios'


class LiveTrade extends Component {

    state={
        step:1,
        entry_price:0,
        stop_loss1:0,
        signal_type:'',
        tp1:0,
        tp2:0,
        time_frame:'',
        comment:'',
        errors:null,
        response:'',
        show:false,
        // asset_type:'',
        asset:''
    }

    nextstep = () =>{

        const { step } =this.state
        this.setState({step:step+1})
    }

    prevstep = () =>{

        const { step } =this.state
        this.setState({step:step-1})
    }

    
    
    submit=async(event)=>{
        event.preventDefault()

        console.log(this.state.tp1+' '+this.state.signal_type+' '+this.state.tp1+' '+this.state.tp2)
        await axios.post('http://risk-api.sortika.com/api/v1/trade-requests/create',{
            "requestor": this.props.AuthUser.id,
            "win_loss_ratio": this.props.AuthUser.win_ratio,
            "asset":this.state.asset,
            "entry_price": this.state.entry_price,
            "take_profit_1":this.state.tp1,
            "take_profit_2": this.state.tp2,
            "stop_loss": this.state.stop_loss1,
            "signal_type":this.state.signal_type,
            "time_frame": this.state.time_frame,
            "environment":"live"
        }).then((res)=>{
            console.log(res)

                this.setState({response:res.data.message,show:true})
           
        })
        .catch((err)=>{
            console.log(err.response.data)

            this.setState({errors:err.response.data.errors,show:true})
        
        })
    }

    handlechange=(event)=>{

        this.setState({[event.target.name]:event.target.value})

    }
  render() {
    const {step,entry_price,stop_loss1,signal_type,tp1,tp2,time_frame,comment,asset,asset_type,errors,response} =this.state
    const values={entry_price,stop_loss1,signal_type,tp1,tp2,time_frame,comment,asset,asset_type,errors,response}

    switch(step){
        case 1:
            return (
                <Stepone 
                nextstep={this.nextstep}
                handlechange={this.handlechange}
                values={values}
                submit={this.submit}
                modalshow={this.state.show}
                hide={()=>this.setState({show:false})}
            />
            )

        case 2:
            return (
                <Steptwo
                     prevstep={this.prevstep}
                        handlechange={this.handlechange}
                        values={values}
                />
            )
        // case 3:
        //         return (
        //             <Steptre
        //                   prevstep={this.prevstep}
        //                     handlechange={this.handlechange}
        //                     values={values}
        //             />
        //         )

         default:
                 return null
        

    }
  }
}

const mapStateToProps=(state)=>{
    return{
      AuthUser:state.Auth.user, 
    //   Token:state.Auth.token ,
    //   bal:state.Auth.trader_acc_balance
  
    }
  }
export default connect(mapStateToProps)(LiveTrade)