'use client'

import styled from "styled-components";

const Background = styled.div`
background: url(/assets/coming-soon.webp) no-repeat center;
background-size: cover;
height: 100vh;
align-content: center;
`

const Wrapper= styled.div`
display: grid;
background: rgba(0,0,0, 0.7);
margin: 8px;
height: 60vh;
align-content: center;
text-align: center;
border-radius: 8px;
gap: 16px;
font-size: min(10vw, 40px);
h1{
font-size: min(11vw, 54px);
`
const ComingSoon = () => <Background><Wrapper><h2>Coming Soon!</h2><h1>PADM CONSTRUCTION SERVICES</h1></Wrapper></Background>;

export default ComingSoon