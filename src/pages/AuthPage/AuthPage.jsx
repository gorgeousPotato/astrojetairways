import { useSpring, animated } from '@react-spring/web';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import "./AuthPage.css";


export default function AuthPage( { setUser }) {
  const [formChoice, setFormChoice] = useState('signup');
  function handleUiChoice() {
    if (formChoice === 'signup') setFormChoice('login');
    if (formChoice === 'login') setFormChoice('signup');
  };
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 1000 },
  });
  return (
    <main className="AuthPage">
      <animated.div style={logoAnimation}> 
        <h1>AstroJet</h1>
      </animated.div>
      <div className="login-signup">
        {formChoice==='signup' ? <SignUpForm setUser={ setUser }/> : <LoginForm setUser={ setUser }/>}
        <div className="p-btn">
          {formChoice === 'signup' ? <p>Already have an account?</p> : <p>New user?</p>}
          <button onClick={handleUiChoice}>{formChoice === 'signup' ? 'Login' : 'Sign Up'}</button>
        </div>
      </div>
    </main>
  );
}