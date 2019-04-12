import React , {Component} from 'react';
import './Login.css';

class Login extends Component {

    constructor(props){
        super(props);
        
        this.state={
            emailField : '',
            passwordField: ''
        }
       
    }
    loginClicked = () => {

        // this.setState({emailField : });
       alert(this.state.emailField + this.state.passwordField);
       
    }
    onChange1 = (e) => {

        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.loginClicked();
        }
    }

    render(){
     
    return (
        <div className='loginWrap'>
            <div className='loginLeft'>Login</div>
            <div className='login'>
                <div ><input className='loginIn' name='emailField' type='email'placeholder=' email' value={this.state.emailField} onChange={this.onChange1}></input></div>
                <div ><input className='loginIn' name='passwordField' type='password'placeholder=' password' value={this.state.passwordField} onChange={this.onChange1} onKeyPress={this.handleKeyPress}></input></div>
                <div><button className='loginButton'onClick={this.loginClicked}>Login</button></div>
            </div>
        </div>
    );
    }
};

export default Login;