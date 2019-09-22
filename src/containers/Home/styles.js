import styled from 'styled-components';


export const Homestyles = styled.div`
display: flex;
margin-bottom: 50px;
`;

export const HomeNav = styled.ul`
margin-left: auto;
display: flex;
list-style: none;
margin-right: 120px;
font-size: 13px;
`;

export const Portfolio = styled.div`
margin-left: 52px;
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
display: flex;
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
    font-size: 36px;
    line-height: 1.25;
    max-width: 600px;
    margin-bottom: 50px;
    padding-bottom: 0px;
    color: white;
}

span {
    color: #9C2E3E;
}

h4 {
    margin-bottom: 15px;
    font-family: verdana;
    font-weight: normal;
    font-size: 24px;
}
`;

export const GreetingText = styled.h2`
font-size: 30px;
font-family: Avenir;
font-weight: lighter;
padding: 0px;
margin-bottom: 29px;
}
`;

export const Name = styled.div`
font-family: Arial;
font-size: 6rem;
font-weight: bold;
color: white;
line-height: 1;
margin-bottom: 25px;
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
font-family: Arial;
font-size: 15px;
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
border: 1px solid #E3DFF1
font-family: Arial;
font-size: 15px;

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

export const BodyImage = styled.div`
margin: auto;
width: 50%;
padding-left: 15px;
`;

export const LangButtons = styled.ul`
margin-left: auto;
display: flex;
flex-direction: row;
list-style: none;
padding: 11px 35px 5px;

li {
    padding: 12px;
    cursor: pointer;
}
`