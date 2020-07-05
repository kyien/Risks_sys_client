import React, { Component } from 'react'
import { Redirect,withRouter} from "react-router-dom";
import axios from 'axios'
import './../App.css';
import {Modal,Button}from 'react-bootstrap'
import logo from '../../assets/img/knight.png';


 class Verify extends Component {

  constructor(props){
    super(props)
    this.state={
         show:false,
        success:true,
        // submitted:false,
        message:''
    }
  }
async componentDidMount(){


  await axios.post('https://api.sortika.com/client/email/verify',
  {
    token:this.props.match.params.token,
    email:this.props.match.params.email,
  }).then(
    (res)=>{
      console.log(res)
      if(res.status == 203){
     
    this.setState({message:res.data.message,show:true,success:false})
    
        }
        
      }).catch((err)=>{
        console.log(err)
        this.setState({message:err.message,show:true,success:false})
    
      })
     
}
redirect(){
   this.props.history.push('/')
  // return <Redirect to="/" />
}
  render() {
    return (
      <div>
      <section id="topbar" className="d-none d-lg-block">
      <div className="row">
      <div className="col-md-4">
      <div className="container clearfix">
        <div className="contact-info">
          <i className="icofont-envelope"></i><span className="diff-link" >contact@knightingale.ke</span>
          <i className="icofont-phone"></i>
          <span>+254 7000 0000</span>
           {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           
         
           </div>
           {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
           
  
         
         
             </div>
             </div>
         <div className="col-md-4"></div>
         <div className="col-md-4">
        <div className="social-links  dyv">
        
          <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
          <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
          <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
          <a href="#" className="skype"><i className="icofont-skype"></i></a>
          <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
        </div>
        </div>
      </div>
  
      
    </section>
  
  
    <header id="header">
     <div className="row">
      {/* <div className="container"> */}
  
        {/* <div className="logo float-left"> </div> */}
          <div className="col-md-3">
            <div className="logo">
                <a href="index.html"><img src={logo} alt="" className="img-fluid"/>
              <span className="header-title">RISK SYS</span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
  
               <nav className="nav-menu ">
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            {/* <li className="drop-down"><a href="">Sign In</a>
              <ul>
                <li><a href="#" onClick={()=>this.onOpenModal('opensignin','trader')}>Trader</a></li>
                <li><a href="#" onClick={()=>this.onOpenModal('opensignin','client')}>Client</a></li>
               
              </ul>
            </li> */}
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
          </div>
       
        {/* </div> */}
      </div>
          
    </header>
    {/* <section id="topbar" className="d-none d-lg-block">
     
    </section> */}
      <br/><br/>

    <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header >
                        <Modal.Title>Email Verification</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h5 className='alert alert-danger'>{this.state.message}</h5>
                        {/* <p> You can now signin with your new password</p> */}
                        
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
       </Modal>
      <div className="row">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="card">
          <h5 className="card-header">Email Verified &nbsp;&nbsp;<i className="fa fa-check-circle-o" aria-hidden="true"></i></h5>
          <div className="card-body">
            <h5 className="card-title">Succesfully verified your email</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            
            {this.state.success?
            <button onClick={()=>this.redirect()} className="btn btn-primary btn-lg">Proceed to login</button>
            :
            null
            }
          </div>
        </div>
      </div>
      <div className="col-lg-3"></div>
      </div>
   
   </div>
   )
  }
}

export default withRouter(Verify)