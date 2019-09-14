import styled from 'styled-components';


export const Homestyles = styled.div`
display: flex;
margin-bottom: 115px;
`;

export const HomeNav = styled.ul`
margin-left: auto;
display: flex;
list-style: none;
margin-right: 120px;
font-size: 13px;
`;

export const Portfolio = styled.div`
font-family: Apple Chancery;
font-size: 3rem;
`;

export const PortfolioElements = styled.h4`
margin: 10px;
`;

export const HomeNavElements = styled.h2`
padding: 27px 40px 10px 35px;
font-weight: normal;
cursor: pointer;
&:hover {
    background-color: #ED4630;
  }
`;

export const BodyText = styled.div`
max-width: 1448px;
margin: auto;
font-family: Avenir;
font-weight: lighter;

h3 {
    margin: 0;
    padding: 0;
}

p{
    margin: 0;
    padding: 0;
}
`;

export const GreetingText = styled.h3`
font-size: 24px;
font-family: Avenir;
font-weight: lighter;
`;

export const Name = styled.div`
font-family: Arial;
font-size: 7rem;
font-weight: bold;
`;

export const SubText = styled.div`
margin: 45px;
font-family: beirut;
font-size: 24px;
font-weight: normal;
`;

export const HireButton = styled.button`
border-radius: 30px;
margin-right: 14px;
height: 53px;
width: 145px;
background-color: #ED4630;
border: none;
color: white;
cursor: pointer;
`;

export const PortfolioButton = styled.button`
border-radius: 30px;
margin-right: 14px;
height: 53px;
width: 145px;
border: none;
color: white;
cursor: pointer;
background-color: #0F0C38;
border: 1px solid;
`;

export const HomeIcons = styled.div`
display: flex;
width: 400px;
margin-bottom: 38px;
`;

export const HomeIcon = styled.div`
margin-right: 15px;
cursor: pointer;
`;