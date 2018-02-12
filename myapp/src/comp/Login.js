import React, { Component } from 'react';
import Signup from './Signup';

import mySocket from 'socket.io-client';//importing socket packege
import '../App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            changeUi: 0,
            changeToApp: 2,
            username: "",
            password: "",
            fetchedUsername: "",
            fetchedPassword: "",
            
            calc: false,
            downPayment: 0,
            months: 0,
            total: 0,
            // Ramin's states
            servMsg:"",
            myGreetings:""
        }
        this.changePage=this.changePage.bind(this);
        this.changePage_2=this.changePage_2.bind(this);
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.speakServer=this.speakServer.bind(this);
        
        this.openCalc=this.openCalc.bind(this);
        this.handleDownPayment=this.handleDownPayment.bind(this);
        this.handleMonths=this.handleMonths.bind(this);
        this.submitCalc=this.submitCalc.bind(this);
    }
    
    // Login.js functions - changePage and changePage_2
    handleUsername(evt){
        this.setState({
            username:evt.target.value
        });
    }
    
    handlePassword(evt){
        this.setState({
            password:evt.target.value
        });
    }
    
    changePage() {
        this.setState ({
            changeUi: 1
        })
    }
    
    changePage_2() {
        fetch("/username").then((resp)=>{
            return resp.text();
        }).then((text)=>{
            this.setState({
                fetchedUsername:text
            });
        });
        fetch("/password").then((resp)=>{
            return resp.text();
        }).then((text)=>{
            this.setState({
                fetchedPassword:text
            });
        });
        
        this.setState ({
            changeUi: 2
        });
        console.log("testing");
        console.log(this.state.username);
        console.log(this.state.password);
        console.log(this.state.fetchedUsername);
        console.log(this.state.fetchedPassword);
    }
    
    openCalc() {
        this.setState({
            calc: true
        });
    }
    
    handleDownPayment(evt){
        this.setState({
            downPayment:evt.target.value
        });
    }
    
    handleMonths(evt){
        this.setState({
            months:evt.target.value
        });
    }
    
    submitCalc() {
        var Total = 50000 - this.state.downPayment;
        var Total_2 = Total/this.state.months;
        this.setState({
            total: Total_2
        });
    }
    
    // Ramin's App.js functions - componentDidMount, speakServer, handleGreeting, addGreeting
    componentDidMount(){
        setInterval(this.speakServer, 1000);
        this.socket=mySocket("http://142.232.125.236:10001");
        //the message "joined" is received here and alerts
        this.socket.on("joined",()=>{
            alert("someone had joined");
        })
    }
    
    speakServer(){
        console.log("speaking");
        //this is were we fetch the message from server
        fetch("/greeting").then((resp)=>{
            return resp.text();
        }).then((text)=>{
            this.setState({
                servMsg:text
            });
        })// the end of fetch
    }
   
  render() {
      
      var ui = null;
      var calculator = null;
      
      if (this.state.changeUi === 0) {
          ui = (
              <div>
              <h3>Welcome to Monika and Harks Page!</h3>
              <h4>Sign Up or Sign in!</h4>
                <p>Username:</p>
                <p><input type="text" placeholder="username" onChange={this.handleUsername} /></p>
                <p>Password:</p>
                <p><input type="text" placeholder="password" onChange={this.handlePassword} /></p>
              <hr />
              <div className="Main">
                  <span></span>
                  <span className="btnArea">
                    <button onClick={this.changePage}>Sign Up</button>
                    <button onClick={this.changePage_2}>Sign In</button>
                  </span>
                  <span></span>
              </div>
              <hr />
          {this.state.username}
            {this.state.password}
          {this.state.fetchedUsername}
          {this.state.fetchedPassword}
              <hr />
          {this.state.changeToApp}
              </div>
          );
      } else if (this.state.changeUi === 1) {
          ui = (
              <Signup />
          );
        }
        if (this.state.changeUi === 2) {
              if (this.state.username !== "" && this.state.password !== "" ){
                  if(this.state.username === this.state.fetchedUsername && this.state.password === this.state.fetchedPassword){
                      ui = (
                      <div>
                          <hr />
                        <h1>{this.state.servMsg}</h1>
                        <hr />
                          
                                <h4 className="Title">Project by Monika Szucs and Hark Grewal</h4> 
                                
                                  <h3>
                                    Welcome to the Home Page!
                                  </h3>
                          
                                
                                <h4>Home</h4>
                        <hr />
                            <div>
                                  <div className="ImagesArea">
                                    <img src="image/Monika.jpg" alt="Monika"/>
                                  </div>
                                  <h3>Monika Szucs</h3>
                                <div className="Main">
                                    <span>
                                        Monika loves to code webapps. She is passionate about create products come to life for people to use on their modbile devices or desktop computers.
                                    </span>
                                    <span>
                                    </span>
                                    <span>
                                        She also really like making YouTube videos. She hopes to make more short films in the future.
                                    </span>
                                </div>
                            </div>
                          <hr />
                            <div>
                                <div className="ImagesArea">
                                    <img src="image/Hark.jpg" alt="Hark"/>
                                </div>
                                <h3>Hark Grewal</h3> 
                          
                                <div className="Main">
                                    <span>
                                        Hark likes to code. His favourite subject is Dymanic Content because he is so passionate about leading react
                                    </span>
                                    <span>
                                    </span>
                                    <span>
                                        He likes to also fix cars. He hope to own his own comapny someday to fix and upgrade cars.
                                    </span>
                                </div>
                          
                            </div>
                        <hr/>
                        <hr/>
                          
                            <div className="Main">
                              <span></span>
                              <span className="btnArea">
                                <button className="OpenCalc" onClick={this.openCalc}>Use Our Calculator!</button>
                                      </span>
                              <span></span>
                            </div>

                          
                      </div>
                     );
                  }
              }
        }
          
          if (this.state.calc === false) {
              calculator = (
                  <div>
                  <p></p>
                  </div>
              );
          } else if (this.state.calc === true) {
              calculator = (
                  <div>
                    <h3>Calculate your purchase</h3>
        
                      <p>Imagine you have a $50,000 loan. You can type your downpayment amount and and number of month you will take to pay off the rest.</p>

                        <p>Downpayment Amount:</p>
                        <input type="text" placeholder="0" onChange={this.handleDownPayment} />
                        <p>Number of Months: </p>
                        <input type="text" placeholder="0" onChange={this.handleMonths} />
                        <hr/>
                        
                        <div className="Main">
                            <span></span>
                            <span className="btnArea">
                            <button onClick={this.submitCalc} >Submit</button>
                            </span>
                            <span></span>
                        </div>
                      <div>
                       <h3>Result: $</h3> 
                       <h1>{this.state.total}</h1>
                      </div>
                  </div>
              );
          }
      
    return (
      <div className="App">
      {ui}
        {calculator}
      </div>
    );
  }
}

export default Login;