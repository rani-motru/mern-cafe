import React, {useState} from 'react'
import styles from './AuthPage.module.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
 import Logo from '../../components/Logo/Logo'
function AuthPage({setUser}) {
  const [ showLogin, setShowLogin] = useState(true)
  return (
    <main className={styles.AuthPage}>
    <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
    {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
     {/* <SignUpForm setUser={props.setUser} />
     <LoginForm setUser={props.setUser} /> */}
    </main>
   
  )
}

export default AuthPage