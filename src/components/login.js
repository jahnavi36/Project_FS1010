import React,{Component} from 'react';

class Login extends Component {
    
    render() {
        return (
    
        <div className = "loginbox">
            <h2>Login</h2>
            <p>Username</p>
            <input type="text" name=""  placeholder="Enter Username"/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <input type="button" className="button" value="submit" />   
        </div>    
             
);
}
};
export default Login;