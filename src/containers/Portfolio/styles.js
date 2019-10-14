import styled from 'styled-components';
import profilepic from '../../assets/profilepic.jpg';


export const PortfolioContainer = styled.div`
color: #394382;
display: flex;
flex-direction: column;
// padding: 25px;
// max-width: 1248px;
margin: auto;
justify-content: space-between;
@media only screen and (max-width: 769px) {
    text-align: center;
    padding: 0px;
}
`;

export const Framewrapper1 = styled.div`
display: flex;
flex-direction: row;
margin: 100px auto;
margin-bottom: 0px;
@media only screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
}
`;

export const Frameitem = styled.div`
@import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
font-family: 'Cairo', sans-serif;
line-height: 4.5rem;
width: 47%;
padding-left: 15px;
font-size: 2rem;
`

export const Framewrapper2 = styled.div`
display: flex;
flex-direction: row;
margin: 100px auto;
background-color: #FAFAFC;
`