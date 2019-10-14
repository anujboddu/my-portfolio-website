import styled from 'styled-components';
import profilepic from '../../assets/anuj-10.jpg';


export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-color: #0F0C38;
`;

export const HomePage = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
max-width: 1248px;
margin: auto;
justify-content: space-between;

@media only screen and (max-width: 769px) {
    text-align: center;
    padding: 0px;
}
`

export const HomeNav = styled.ul`
margin-left: auto;
display: flex;
list-style: none;
margin-right: 120px;
font-size: 13px;
`;

export const Portfolio = styled.div`
@import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
font-family: 'Dancing Script', cursive;
font-size: 26px;
margin-bottom: 50px;

h1 {
    margin: 0px;
}
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

export const Profile = styled.div`
display: flex;
flex-direction: row;
max-width: 1448px;
margin: auto;
font-family: Avenir;
font-weight: lighter;


@media only screen and (max-width: 769px) {
    flex-direction: column-reverse;
}

h3 {
    margin: 0;
    padding: 0;
}

p{
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
    font-family: 'Titillium Web', sans-serif;
    margin: 0;
    font-size: 36px;
    line-height: 1.25;
    max-width: 600px;
    margin-bottom: 25px;
    padding-bottom: 0px;
    color: white;

    @media only screen and (max-width: 769px) {
        font-size: 26px;
    }
}

span {
    color: #9C2E3E;
}

h4 {
    margin-right: 15px;
    font-family: verdana;
    font-weight: normal;
    font-size: 24px;
    margin: 0px 15px 0px 0px;
}
`;

export const GreetingText = styled.h2`
font-size: 30px;
font-family: Avenir;
font-weight: lighter;
padding: 0px;
margin-bottom: 0px;
}
`;

export const Name = styled.div`
@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');
font-family: 'Merriweather', serif;
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

a {
    text-decoration: none;
    color: white;
    cursor: pointer;
}

@media only screen and (max-width: 769px) {
    margin-bottom: 18px;
    width: 250px;
  }
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

a {
    text-decoration: none;
    color: white;
    cursor: pointer;
}
@media only screen and (max-width: 769px) {
    width: 250px;
  }
`;

export const HomeIcons = styled.div`
display: flex;
width: 400px;
margin-bottom: 25px;
align-items: center;
@media only screen and (max-width: 769px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 40px auto;
  }
`;

export const HomeIcon = styled.div`
margin-right: 15px;
cursor: pointer;
`;

export const BodyImage = styled.div`
// margin: auto;
// width: 300px;
// padding-left: 15px;
// background-image : url(${profilepic});
// background-size: contain;
// height: 350px;
// background-repeat: no-repeat;
// margin-left: 75px;
display: block;
width: 50%;
text-align: center;
padding: 10px;
@media only screen and (max-width: 769px) {
    width: 200px;
    text-align: center;
    margin-bottom: 10px;
    padding-left: 0px;
    margin: auto;
}
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