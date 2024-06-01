import { styled } from 'styled-components'
import React from 'react'
import backgroundImage from '../assets/login.jpg'
const BackgroungImage = () => {
  return (
   <Container>
        <img src={backgroundImage} alt="background" />
      </Container>
    
  )
}

export default BackgroungImage
const Container = styled.div`
height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw;
}
`;