import React from "react";
import { styled } from "styled-components";
const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>Sparkleo</LogoContainer>
      <SiteName>Employee Management</SiteName>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.div`
background-color: 	#0fbbbb;
display: grid;
grid-template-columns: 1fr 1fr;
height: 10vh;
color: white;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap');
font-family: 'Poppins', sans-serif;
`;

const LogoContainer = styled.div`
display: flex;
padding-left: 5rem; 
align-items: center;
font-size: 1.5em;
&:before{
    content: "®";
    position: relative;
    left: 5em;
    font-size: .8em;
    top: -.8em;
}

`;
const SiteName = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
padding-right: 5rem; 
font-size: 1.5em
`;
