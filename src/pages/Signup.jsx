import { styled } from 'styled-components'
import React from 'react'
import BackgroungImage from '../components/BackgroundImage'
import Header from '../components/Header'


const Signup = () => {
  return (
   <Container>
    <BackgroungImage />
    <div className='content'>
    <Header/>
    <div className='body flex column a center j center '>
        <div className='content flex column a center j center'>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='form '>
                <input type="text" placeholder='Email address' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Get Started</button>

            </div>
            <button>Log in</button>
        </div>

    </div>
    </div>

  
   </Container>
  )
}

export default Signup
const Container = styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;

}

`;