import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import {connect} from 'react-redux'

class Reports extends Component {
    constructor(){
        super()
        this.state={
            signals:null,
            error:null
        }
    }

    async componentDidMount(){

        await axios.get('http://risk-api.sortika.com/api/v1/trade-requests?requestor_id='+this.props.AuthUser.id,{

        }).then((res)=>{
            console.log(res)
            this.setState({signals:res.data.data})
        }).catch((err)=>{
            console.log(err)

            this.setState({error:err})
        })
    }
    render() {

        const columns = [
            {
             name: "environment",
             label: "Environment",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "asset",
             label: "Asset",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "entry_price",
             label: "Entry Price",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "take_profit",
             label: "Take Profit",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "stop_loss",
             label: "Stop Loss",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "take_profit",
             label: "Take Profit",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "signal_type",
             label: "Signal Type",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "time_frame",
             label: "Time Frame",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "status_text",
             label: "Status",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "issue_time",
             label: "Issue Time",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "lots_allocated",
             label: "Lots Allocated",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "risk",
             label: "Risk",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "volume",
             label: "Volume",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "profit",
             label: "Profit",
             options: {
              filter: true,
              sort: false,
             }
            },
           ];
           const file_name=Date.now()+'.csv'
const options = {
  filterType: 'checkbox',
  downloadOptions:{
    filename:file_name,
    separator:',',
    filterOptions:{
      useDisplayedRowsOnly:true,
      useDisplayedColumnsOnly:true
    }
  }
};
        return (
            <div>
            { this.state.signals ?  <MUIDataTable
                title={"Your Signal Reports"}
                data={this.state.signals}
                columns={columns}
                options={options}
                /> : <h2>Loading .....</h2>}
            </div>
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

  export default connect(mapStateToProps)(Reports)