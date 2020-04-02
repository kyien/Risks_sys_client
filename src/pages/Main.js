import React , {Component} from 'react';
import logo from '../assets/img/knight.png';
import './App.css';
import LoginModal from './SigninModal'
import SignupModal from './SignupModal'


 class Main extends Component {

  state = {
    opensignin: false,
    opensignup: false,
  }
 
  onOpenModal (name) {
    this.setState({[name] : true })
  }
 
  onCloseModal(name) {
    this.setState({ [name]: false })
  }

  render(){
  return (
    <div className="App">

<LoginModal open={this.state.opensignin} close={()=>this.onCloseModal('opensignin')} link={()=>this.onOpenModal('opensignup')}/>
<SignupModal 
open={this.state.opensignup} 
close={()=>this.onCloseModal('opensignup')}
link={()=>this.onOpenModal('opensignin')}
/>
     
  <section id="topbar" className="d-none d-lg-block">
    <div className="container clearfix">
      <div className="contact-info float-left">
        <i className="icofont-envelope"></i><a href="mailto:contact@example.com">contact@sortika.com</a>
        <i className="icofont-phone"></i>
        <span>+254 7000 0000</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary btn-sm" onClick={()=>this.onOpenModal('opensignup')}>JOIN</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" className="btn btn-primary btn-sm" onClick={()=>this.onOpenModal('opensignin')}>SIGN UP</button>
      </div>
      <div className="social-links float-right">
      
        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
        <a href="#" className="skype"><i className="icofont-skype"></i></a>
        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
      </div>
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
              <li><a href="#" onClick={()=>this.onOpenModal('opensignin')}>Trader</a></li>
              <li><a href="#" onClick={()=>this.onOpenModal('opensignin')}>Client</a></li>
             
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
                <h2 className="animated fadeInDown">Welcome to <span>Risksys</span></h2>
                <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" className="btn-get-started animated fadeInUp scrollto">Read More</a>
              </div>
            </div>
          </div>

         
          <div className="carousel-item slide2" >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
                <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="#about" onClick={()=>this.onOpenModal('opensignup')} className="btn-get-started animated fadeInUp scrollto">JOIN</a>
              </div>
            </div>
          </div>

          <div className="carousel-item slide3" >
            <div className="carousel-container">
              <div className="carousel-content container">
                <h2 className="animated fadeInDown">Sequi ea ut et est quaerat</h2>
                <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
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
          
          </div>
    </div>
    </div>

  </section>

    </div>
  )
}
}

export default Main;
