import React from "react";
import {
    Container, HomePage, HomeIcon, HomeIcons, PortfolioButton, BodyImage,
    Portfolio, Profile, GreetingText, Name, HireButton
} from './styles';
import logo from '../../assets/GitHub.png';
import profilepic from '../../assets/anuj-10.jpg';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <Container>
                <HomePage>
                    <Portfolio>
                        <h1>Portfolio</h1>
                    </Portfolio>
                    <Profile>
                        <div>
                            <GreetingText>Hello, I am</GreetingText>
                            <Name>Anuj Boddu</Name>
                            <p>Full Stack <span>Web</span> Developer</p>
                            <HomeIcons>
                                <h4>Find Me on</h4>
                                <HomeIcon>
                                    <a href="https://www.linkedin.com/in/anuj-boddu-abba74aa" target="_blank" id="linkedIn"><img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-PNG.png" height="40" /> </a>
                                </HomeIcon>
                                <HomeIcon>
                                    <a href="https://github.com/anujboddu" target="_blank" id="github"><img src={logo} height="40" /></a><br />
                                </HomeIcon>
                            </HomeIcons>
                            <HireButton><Link to='/hireMe'>Hire Me</Link></HireButton>
                            <PortfolioButton><Link to='/portfolio'>Portfolio</Link></PortfolioButton>
                        </div>
                        <BodyImage>
                            <img src={profilepic}    width = '50%' />
                        </BodyImage>
                        {/* <div>
                            </div> */}
                    </Profile>
                </HomePage>
            </Container>

        )
    }
};

export default Home; 