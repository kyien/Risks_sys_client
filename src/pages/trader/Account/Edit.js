import React, { Component } from 'react'
import { Form,Modal,Button,Image } from 'react-bootstrap'
import {connect} from 'react-redux'

 class Edit extends Component {

    state={
        image:this.props.AuthUser.avatar,
        username:this.props.AuthUser.username,
        email:this.props.AuthUser.email,
        // approved:this.props.AuthUser.approved?true:false,
        show:false
    }

    changeHandler = event => {
        //event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })

      }

      onSubmit=(event)=> {
            event.preventDefault()

          this.setState({show:true})

      }
    render() {
        return (
            <div>
                 <div className="page-header">
                    <h3 className="page-title"> Edit Profile </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
                        <li className="breadcrumb-item active" aria-current="page">edit-profile</li>
                        </ol>
                    </nav>
                 </div>


                <div className="row">

                <Modal show={this.state.show} onHide={()=>this.setState({show:false})}>
                        <Modal.Header closeButton>
                        <Modal.Title>edit profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Profile changed</Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={()=>this.setState({show:false})}>
                            Okay
                        </Button>
                        
                        </Modal.Footer>
                    </Modal>
                <div className="col-md-6 offset-md-3 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Edit Profile</h4>

              
                <form className="forms-sample" onSubmit={this.onSubmit}>

                  <Form.Group>
                  <div className="col-md-4 offset-md-3">
                <Image src={this.state.image} roundedCircle width="200px"  height="200px"/>
                </div>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">My username:</label>
                    <Form.Control
                     type="text"
                      id="exampleInputUsername1"
                       placeholder="Change Username"
                        size="lg"
                        name="username"
                         value={this.state.username} 
                          onChange={this.changeHandler}
                          />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">My email:</label>
                    <Form.Control type="text" className="form-control" name="email" value={this.props.AuthUser.email}
                     id="exampleInputEmail1" placeholder="Change email" onChange={this.changeHandler}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1"> Approved:</label>
                    <Form.Control type="text" className="form-control" name="email" value={this.props.AuthUser.approved ?"true":"false"}
                     id="exampleInputEmail1" placeholder="Change email" disabled/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Win ratio:</label>
                    <Form.Control type="text" className="form-control" name="email" value={this.props.AuthUser.win_ratio}
                     id="exampleInputEmail1" placeholder="Change email" disabled/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Loss ratio:</label>
                    <Form.Control type="text" className="form-control" name="email" value={this.props.AuthUser.loss_ratio}
                     id="exampleInputEmail1" placeholder="Change email" disabled/>
                  </Form.Group>
                 
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Profit Factor:</label>
                    <Form.Control type="text" className="form-control" name="email" value={this.props.AuthUser.profit_factor}
                     id="exampleInputEmail1" placeholder="Change email"  disabled/>
                  </Form.Group>
                 
                  <button type="submit" className="btn btn-primary mr-2" >Save Changes</button>
                </form>
              </div>
            </div>
          </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
      AuthUser:state.Auth.user, 
      Token:state.Auth.token 
    }
  }

  export default connect(mapStateToProps)(Edit)