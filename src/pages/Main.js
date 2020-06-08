import React , {Component} from 'react';
import logo from '../assets/img/knight.png';
import './App.css';
import LoginModal from './SigninModal'
import SignupModal from './SignupModal'
import { connect } from "react-redux"
import {getForex} from '../pages/redux/Action'


 class Main extends Component {

  state = {
    opensignin: false,
    opensignup: false,
    type:''
  }
 
async componentDidMount(){

  await this.props.getForex()
}

  onOpenModal (name,type) {
    this.setState({[name] : true, type:type })
  }
 
  onCloseModal(name) {
    this.setState({ [name]: false })
  }

  render(){
  return (
    <div className="App">

<LoginModal 
type={this.state.type}  
open={this.state.opensignin} 
close={()=>this.onCloseModal('opensignin')} 
link={this.state.type ==='trader'?()=>this.onOpenModal('opensignup','trader') :()=>this.onOpenModal('opensignup','client')}/>

<SignupModal 
type={this.state.type}
open={this.state.opensignup} 
close={()=>this.onCloseModal('opensignup')}
link={this.state.type ==='trader'?()=>this.onOpenModal('opensignin','trader'):()=>this.onOpenModal('opensignin','client')}
/>
     
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

    <div className="row">
      <div className="col-md-4"></div>
        <div className="col-md-2">
    <div className="dropdown"> 
        <button type="button" className="btn btn-primary btn-lg dropdown-toggle "
                id="dropdownMenuBtn"
                data-toggle="dropdown"
                  aria-haspopup="true" 
                  aria-expanded="false"
                >SIGN IN</button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuBtn">
              <a className="dropdown-item" href="#" onClick={()=>this.onOpenModal('opensignin','trader')}>Trader</a>
              <a className="dropdown-item" href="#" onClick={()=>this.onOpenModal('opensignin','client')}>Client</a>
             
                   </div> 
                   </div>
                   </div> 
                <div className="col-md-1"></div>
              <div className="col-md-2">
         <div className="dropdown "> 
         <button type="button" className="btn btn-primary btn-lg dropdown-toggle "
         id="dropdownMenuBtn"
                data-toggle="dropdown"
                aria-haspopup="true" 
                aria-expanded="false"
        >JOIN</button>
             
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuBtn">
              <a className="dropdown-item top-link-drop" href="#"  onClick={()=>this.onOpenModal('opensignup','trader')}>Trader</a>
              <a className="dropdown-item top-link-drop" href="#"  onClick={()=>this.onOpenModal('opensignup','client')}>Client</a>
                   </div> 
           </div> 
           </div>
           <div className="col-md-3"></div>
    </div>
  </section>


  <header id="header">
    <div className="container">

      <div className="logo float-left">
        <a href="index.html"><img src={logo} alt="" className="img-fluid"/>
        <span className="header-title">RISK SYS</span>
        </a>
      </div>

      <nav className="nav-menu float-right d-none d-lg-block">
        <ul>
          <li className="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li className="drop-down"><a href="">Sign In</a>
            <ul>
              <li><a href="#" onClick={()=>this.onOpenModal('opensignin','trader')}>Trader</a></li>
              <li><a href="#" onClick={()=>this.onOpenModal('opensignin','client')}>Client</a></li>
             
            </ul>
          </li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

    </div>
  </header>
  <section id="topbar" className="d-none d-lg-block">
   
  </section>
    <br/><br/>

   
  <section id="hero">
   
      <div className="row">
        <div className="col-md-8 hero-container">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">

          <div className="carousel-item active slide1">
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animated fadeInDown">Welcome to <span>Knightingale</span></h2>
                <p className="animated fadeInUp">Knightingale Limited is an investment company offering money management services to institutions and individuals in order to provide superior investment performance across diverse global financial markets instruments.</p>
                <a href="#about" className="btn-get-started animated fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>

         
          <div className="carousel-item slide2" >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animated fadeInDown">Your  Investment Market Place</h2>
                <p className="animated fadeInUp">The company has structured innovative trading strategies that are keen on addressing key issues in the African economy. The company prides itself as a premier money manager in Kenya and Sub-Saharan Africa because of its ability to generate premier returns in the market through its controlled and structured investments in foreign exchange, commodity and money markets.</p>
                <a href="#about" onClick={()=>this.onOpenModal('opensignup')} className="btn-get-started animated fadeInUp scrollto">JOIN</a>
              </div>
            </div>
          </div>

          <div className="carousel-item slide3" >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animated fadeInDown">Your Investment Market Place</h2>
                <p className="animated fadeInUp">Using proprietary in-house methods, processes and
                 a superior risk management system, the company maximizes opportunity, minimizes 
                 drawdowns and identifies and capitalizes on nascent trends. 
                 In addition to a robust operational and oversight framework, 
                 strong money management is used to optimize risk and return objectives of the various 
                 funds run by the company.With our robust risk management system, the company through its fund has consistently delivered annualized returns of above 24%. Our customizable system allows our clients define their risk profile and therefore ae able to consistently generate above market returns in their preferred assets. </p>
                <a href="#about" onClick={()=>this.onOpenModal('opensignup')} className="btn-get-started animated fadeInUp scrollto">JOIN</a>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="col-md-3">
        <div className="side-feed">

            <h1 className="fx-stack"><p>FOREX RATES</p></h1>
                <br/>
          { this.props.fxrates ? <table className="table table-striped table-dark">

              <tbody>
                <tr>
                  <td>EUR/GBP</td>
                  <td>{this.props.fxrates.EURGBP.rate}</td>
                </tr>
                <tr>
                  <td>USD/JPY</td>
                  <td>{this.props.fxrates.USDJPY.rate}</td>
                </tr>
                <tr>
                  <td>USD/EUR</td>
                  <td>{this.props.fxrates.USDEUR.rate}</td>
                </tr>
                <tr>
                  <td>NZD/USD</td>
                  <td>{this.props.fxrates.NZDUSD.rate}</td>
                </tr>
                <tr>
                  <td>AUD/USD</td>
                  <td>{this.props.fxrates.AUDUSD.rate}</td>
                </tr>
                <tr>
                  <td>USD/CHF</td>
                  <td>{this.props.fxrates.USDCHF.rate}</td>
                </tr>
              </tbody>

            </table>  :  <h3 className="fx-stack"><p>loading ....</p></h3> }
          
          </div>
    </div>
    </div>

  </section>

    </div>
  )
}
}




const mapStateToProps=(state)=>{
  return{
    // AuthUser:state.Auth.user, 
    fxrates:state.Forex.rates
  }
}

const mapDispatchToProps={

  getForex

}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
