import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    Photo,
  } from "./FooterStyles";
import Logo from './satyamev.png';
const Footer = () => {
  return (
    <div>
        <Box>
      
      <Container>
        <Row>
          <Column>
            <Heading>Our Department</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Team</FooterLink>
            <FooterLink href="#">What We do</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </Column>
          <Column>
            <Heading>More</Heading>
            <FooterLink href="#">Projects</FooterLink>
            <FooterLink href="#">Events</FooterLink>
            <FooterLink href="#">Faculty</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </Column>
          <Column>
            <Heading>Connect</Heading>
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
          </Column>
          <Column>
            <img style={{padding:"20px"}} src="https://cdn.s3waas.gov.in/s36c29793a140a811d0c45ce03c1c93a28/uploads/2018/10/2018100432.jpg" alt="First slide" />
            <img style={{padding:"20px" , height:'200px' , width:'150px'}} src={Logo} alt="First slide" />
          </Column>
          
        </Row>
      </Container>
    </Box>
    </div>
  )
}

export default Footer