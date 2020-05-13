import React, { Component } from 'react'
import { Form,Modal,Button,Image } from 'react-bootstrap'
import {connect} from 'react-redux'

 class Edit extends Component {

    state={
        // image:this.props.AuthUser.avatar,
        username:'',
        email:'',
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

                <div className="col-md-4 offset-md-3">
                <Image src={this.props.AuthUser.avatar} roundedCircle />
                </div>
                <form className="forms-sample" onSubmit={this.onSubmit}>
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1"></label>
                    <Form.Control
                     type="text"
                      id="exampleInputUsername1"
                       placeholder="Change Username"
                        size="lg"
                        name="username"
                         value={this.state.username} 
                          onChange={this.changeHandler}/>
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">email</label>
                    <Form.Control type="text" className="form-control" name="email" value={this.state.email}
                     id="exampleInputEmail1" placeholder="Change email" onChange={this.changeHandler}/>
                  </Form.Group>
                 
                  <button type="submit" className="btn btn-primary mr-2" >Submit</button>
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