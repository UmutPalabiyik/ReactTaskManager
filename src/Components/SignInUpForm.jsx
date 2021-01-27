import styled from "styled-components";
import { useState, useRef } from "react";
import axios from 'axios';

const FormStyle = styled.div`
  font-family: "Montserrat", sans-serif;

  
h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-size: 14px;
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 6px 0;
	width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 5px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

.successLogin {
	margin-top : 5px;
	font-weight: 2em;
	
	background-color: green;
	padding: 5px;
	border-radius: 5px
}

#signupButton {
	margin-top: 5px;
}

`;

const SignInUpForm = () => {
	



  const [addClass, setAddClass] = useState('');

  // Register States & Refs   ---------------------
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [repasswordReg, setRepasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const usernameRegRef = useRef();
  const passwordRegRef = useRef();
  const rePasswordRegRef = useRef();
  const emailRegRef = useRef();


  // Login States & Refs ---------------------
  const [usernameLog, setUsernameLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');

  const usernameLogRef = useRef();
  const passwordLogRef = useRef();



  const register = () => {
	  axios.post('http://localhost:3001/register',{ 
		  username: usernameReg,
		  password : passwordReg,
		  rePassword : repasswordReg,
		  email : emailReg
		})
		.then((res) => {
			console.log(res)
		})
		.catch((err) => {
			console.log(`Register error :  ${err} `)
		})

		usernameRegRef.current.value = "";
		passwordRegRef.current.value = "";
		rePasswordRegRef.current.value = "";
		emailRegRef.current.value = "";



  }

  const login = () => {
	  axios.post('http://localhost:3001/login', {
		  username: usernameLog,
		  password: passwordLog
	  })
	  .then((res) => {
		  console.log(res)
		  if(res.data.message === "Login successful"){
			  console.log(res.data.message)
			  
		  }
		  else{
			console.log(res.data.message)
		  }

	  })
	  .catch((err) => {
		console.log(`Login error :  ${err} `)
	  })

	  usernameLogRef.current.value = "";
	  passwordLogRef.current.value = "";
	  setUsernameLog('');
	  setPasswordLog('');
	  

  }


  // Slide function of login&signup form 
  const rightPanelActive = () => {
    setAddClass("right-panel-active");
  };

  const rightPanelDisabled = () => {
    setAddClass(' ');
  };

  return (
    <FormStyle>
      <div className={`container ${addClass}`} id="container">
        <div className="form-container sign-up-container">
          <form action="/#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="/#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Username" ref={usernameRegRef} onChange={(e) => { setUsernameReg(e.target.value)}}/>
            <input type="email" placeholder="Email"  ref={emailRegRef} onChange={(e) => { setEmailReg(e.target.value)}}/>
            <input type="password" placeholder="Password" ref={passwordRegRef} onChange={(e) => { setPasswordReg(e.target.value)}}/>
			<input type="password" placeholder="Re-password" ref={rePasswordRegRef} onChange={(e) => { setRepasswordReg(e.target.value)}}/>
            <button id="signupButton" onClick={register}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="/#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="/#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Username" ref={usernameLogRef} onChange={(e) => {setUsernameLog(e.target.value)}}/>
            <input type="password" placeholder="Password" ref={passwordLogRef} onChange={(e) => {setPasswordLog(e.target.value)}}/>
            <a href="/#">Forgot your password?</a>
            <button id="signinButton" onClick={login}>Sign In</button>
			
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
          <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                class="ghost"
                id="signUp"
                onClick={rightPanelDisabled}
              >
                Sign Up
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                class="ghost"
                id="signUp"

                onClick={rightPanelActive}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </FormStyle>
  );
};

export default SignInUpForm;
