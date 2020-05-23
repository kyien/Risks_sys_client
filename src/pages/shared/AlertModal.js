import React ,{Component}from 'react'
import Modal from 'react-responsive-modal'
import { connect } from "react-redux"

class AlertModal extends Component{

    state = {
        openmodal: false,
     
      }
     
    onCloseModal() {
        this.setState({ openmodal: false })
      }
    
    render(){
    return (
        <Modal open={this.props.staterr} onClose={()=>this.onCloseModal} center>

                <h3>{this.props.error}</h3>

              </Modal>
    )
    }
}
const mapStateToProps=(state)=>{
    return{
      staterr:state.stateReducer.hasError,
      error:state.stateReducer.errorMessage
    }
}


export default connect (mapStateToProps)(AlertModal)
