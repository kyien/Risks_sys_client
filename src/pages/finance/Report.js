import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios'
import {connect} from 'react-redux'

class FinanceReports extends Component {
    constructor(){
        super()
        this.state={
            reports:null,
            error:null
        }
    }

    async componentDidMount(){

        await axios.post('https://api.sortika.com/client/payments/reports',
        {
          id:this.props.AuthUser.id
        }).then((res)=>{
            console.log(res)
            this.setState({reports:res.data.info})
        }).catch((err)=>{
            console.log(err.response.data)
            this.setState({error:err.response.data})
        })
    }
    render() {

        const columns = [
            {
             name: "transaction_type",
             label: "Transaction",
             options: {
              filter: true,
              sort: true,
             }
            },
            {
             name: "Amount",
             label: "Amount",
             options: {
              filter: true,
              sort: false,
             }
            },
            {
             name: "created_at",
             label: "Timestamp",
             options: {
              filter: true,
              sort: false,
             }
            },
            
           ];
           const file_name='risk_sys_'+Date.now()+'.csv'
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
            { this.state.reports ?  <MUIDataTable
                title={"Your Transactions history"}
                data={this.state.reports}
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
      bal:state.Auth.client_acc_balance
  
    }
  }

  export default connect(mapStateToProps)(FinanceReports)