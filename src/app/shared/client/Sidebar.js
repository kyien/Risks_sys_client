import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { connect } from "react-redux"
import {logoutClientUser} from '../../../pages/redux/Action'


class ClientSidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  logout=(event)=>{
    event.preventDefault()
    this.props.logoutClientUser(this.props.Token)
}

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/account', state: 'accPagesOpen'},
      {path:'/transfer', state:'depositOpen'}
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        {/* <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.svg")} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg" )} alt="logo" /></a>
        </div> */}
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img src={this.props.AuthUser.avatar} alt="profile" />
                    </div>
                   
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                  Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex justify-content-between align-items-start">
                      <p className="profile-name">{this.props.AuthUser.username}</p>
                     
                    </div>
                    <div style={{justifyContent:'space-between',flexDirection:'row'}}><small className="designation text-muted text-small">investor</small>
                      <span className="status-indicator online"></span></div>
              {/* <button className="btn btn-success btn-block">New Project <i className="mdi mdi-plus"></i></button> */}
            </div>
          </li>
          <li className={ this.isPathActive('/client/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/client/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/transfer') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.depositOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('depositOpen') } data-toggle="collapse">
              <i className="mdi mdi-currency-btc menu-icon"></i>
              <span className="menu-title">Finance</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.depositOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/client/transfer/deposit') ? 'nav-link active' : 'nav-link' } to="/client/transfer/deposit">Deposit</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/client/transfer/withdraw') ? 'nav-link active' : 'nav-link' } to="/client/transfer/withdraw">Withdraw</Link></li>
                {/* <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography">Typography</Link></li> */}
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/trade-options') ? 'nav-item active' : 'nav-item' }>
          <Link className="nav-link" to="/client/trade-options">
              <i className="mdi mdi-chart-areaspline menu-icon"></i>
              <span className="menu-title">Trade Options</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/account') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.accPagesOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('accPagesOpen') } data-toggle="collapse">
              <i className="mdi mdi-account-star menu-icon"></i>
              <span className="menu-title">Account</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={  this.state.accPagesOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/client/account/verification') ? 'nav-link active' : 'nav-link' } to="/client/account/verification">Verification</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/client/account/edit') ? 'nav-link active' : 'nav-link' } to="/client/account/edit">Edit Profile</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/signout') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="#" onClick={this.logout}>
              <i className="mdi mdi-logout menu-icon"></i>
              <span className="menu-title">Sign Out</span>
            </Link>
          </li>
        
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

const mapStateToProps=(state)=>{
  return{
    AuthUser:state.Auth.user, 
    Token:state.Auth.token 
  }
}

const mapDispatchToProps={

  logoutClientUser

}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ClientSidebar))