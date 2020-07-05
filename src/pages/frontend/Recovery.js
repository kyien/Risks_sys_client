import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import logo from '../../assets/img/knight.png';
import './../App.css';
import axios from 'axios'
import {Modal,Button}from 'react-bootstrap'
import { Redirect,withRouter} from "react-router-dom";

 class Recovery extends Component {
  constructor(props){
    super(props)
    this.state={
        password:'',
        show:false,
        success:null,
        submitted:false,
        message:''
    }
  
    this.validator = new SimpleReactValidator()
}


componentDidMount(){

  console.log(this.props.match.params.token+' '+this.props.match.params.email)


}
recover_password=async(event)=>{

  event.preventDefault()

    this.setState({submitted:true})

if(this.props.match.params.user == 'client'){
  await axios.post('https://api.sortika.com/client/recover_password',
  {
    token:this.props.match.params.token,
    email:this.props.match.params.email,
    new_password:this.state.password
  }).then(
    (res)=>{
    console.log(res)
    switch(res.status){
      case 201:
          this.setState({message:'Password successfully changed!',show:true,submitted:false})
      break
      case 203:
            this.setState({message:res.data.message,show:true,submitted:false})
      break

        default:
            this.setState({message:'Server error',show:true,submitted:false})

    }
  }).catch((err)=>{
    console.log(err)
    this.setState({message:err.message,submitted:false})

  })
}
else {

  await axios.post('https://api.sortika.com/trader/recover_password',
  {
    token:this.state.token,
    email:this.state.email,
    new_password:this.state.password
  }).then((res)=>{
    console.log(res)

    switch(res.status){
      case 201:
          this.setState({message:'Password successfully changed!',show:true,submitted:false,success:true})
      break
      case 203:
            this.setState({message:res.data.message,show:true,submitted:false,success:false})
      break

        case 204:
          
            this.setState({message:res.data.message,show:true,submitted:false,success:false})
        break
        default:
            this.setState({message:'Server error',show:true,submitted:false,success:false})

    }
    
  }).catch((err)=>{
    console.log(err)
    this.setState({message:err.message,submitted:false,success:false})

  })
}


}

changeHandler = event => {
  this.setState({ [event.target.name]: event.target.value });
}

async redirect(){
  await this.setState({show:false})
  await this.props.history.push('/')
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

    <section id="hero">

    <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header >
                        <Modal.Title>Recover Password</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <h5 className={this.state.success? 'alert alert-success':'alert alert-danger'}>{this.state.message}</h5>
                        {/* <p> You can now signin with your new password</p> */}
                        
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.redirect()}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <form className="signin" 
           onSubmit={this.recover_password}
                  noValidate>
                <h3>Change Password</h3>


                <div className="form-group">
                    <label>New Password</label>
                    <input 
                    name="password"
                        type="password" 
                     className="form-control"
                     value={this.state.password}
                     onChange={this.changeHandler}
                     onBlur={()=>this.validator.showMessageFor('password')}
                    placeholder="Enter password" />
                </div>
                {this.validator.message('password', this.state.password, 'required|min:6')}

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                {
                  this.state.submitted ?
                  <button className="btn btn-primary" type="button" disabled>
                  Processing....
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    
                  </button>
                  :
                  this.validator.allValid()?
                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                :
                <button type="submit" className="btn btn-primary btn-lg" disabled>Submit</button>

                }
                
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>

    </section>



      </div>
    )
  }
}

export default withRouter(Recovery)