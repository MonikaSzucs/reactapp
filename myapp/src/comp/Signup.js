import React, { Component } from 'react';
import Login from './Login';
import mySocket from 'socket.io-client';//importing socket packege

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            changeToSignIn: false
        }
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.addAccount=this.addAccount.bind(this);
        this.changePage=this.changePage.bind(this);
    }
    
   
    // collect string data from what you entered into your input
    handleUsername(evt){
        this.setState({
            username:evt.target.value
        })
    }
    handlePassword(evt){
        this.setState({
            password:evt.target.value
        })
    }
    
    addAccount(){
        console.log("working account"+this.state.username);
        console.log("working account"+this.state.password);
        fetch("/addUser/"+this.state.username);
        fetch("/addPW/"+this.state.password);
        this.setState ({
            changeToSignIn: true
        });
    }
    
    changePage() {
        this.setState ({
            changeToSignIn: true
        })
    }
    
  render() {
      
      var ui = null;
      if (this.state.changeToSignIn === false) {
          ui = (
              <div>
                
                    <h3>Welcome to Monika and Harks Page!</h3>
                <h4>Sign Up With Us!</h4>
                <p>Username:</p>
                <p><input type="text" placeholder="username" onChange={this.handleUsername}/></p>
                <p>Password:</p>
                <p><input type="text" placeholder="password" onChange={this.handlePassword}/></p>
                <hr/>
              
                <div className="Main">
                  <span></span>
                  <span className="btnArea">
                    <button onClick={this.addAccount}>Confirm</button>
                  </span>
                  <span></span>
                 </div>
              
              </div>
          );
      } else if (this.state.changeToSignIn === true) {
          ui = (
                <Login />
          );
      }
      
    return (
      <div className="App">
        {ui}
      </div>
    );
  }
}

export default Signup;