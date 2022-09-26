import React,{useState, useEffect} from "react";
import "./Login.css";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

const login = event => {
    event.preventDefault();
   auth.signInWithEmailAndPassword(email,password).then((auth) => {
    history.push('/')
   }).catch(e => alert(e.message)) 
}

const register = event => {
    event.preventDefault(); 
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        history.push('/')
    }).catch((e) => alert(e.message))
}


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" / >
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type='submit' className='login_signInButton'>Sign in</button>
          <p className='power'> 
            By signing-in you agree to Amazon's Conditions of Use & Sale.Please
            see our Privacy Notice, our Cookies Notice and our interest-Based
            Ads Notice.
          </p>

        </form>
        <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
