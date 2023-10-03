import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Login } from "@mui/icons-material";
import { useState } from "react";


export default function AuthPage( { setUser }) {
  const [formChoice, setFormChoice] = useState('signup')
  function handleUiChoice() {
    if (formChoice === 'signup') setFormChoice('login');
    if (formChoice === 'login') setFormChoice('signup');
  }
  return (
    <main>
      <h1>Auth Page</h1>
      {formChoice==='signup' ? <SignUpForm setUser={ setUser }/> : <LoginForm />}
      <button onClick={handleUiChoice}>{formChoice === 'signup' ? 'Login' : 'Sign Up'}</button>
      {/* <SignUpForm setUser={ setUser }/>
      <LoginForm /> */}
    </main>
  );
}