import React from "react";
import {
    Container, HomePage, HomeIcon, HomeIcons, PortfolioButton, BodyImage, LangButtons,
    Portfolio, PortfolioElements, Profile, GreetingText, Name, HireButton
} from './styles';
import logo from '../../assets/GitHub.png';
import profilepic from '../../assets/developer.svg';

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
                            <p>A young <span>UX/UI</span> Designer with crazy for mobile & web design.</p>
                            <h4>Find Me on</h4>
                            <HomeIcons>
                                <HomeIcon>
                                    <a href="https://www.linkedin.com/in/anuj-boddu-abba74aa" target="_blank" id="linkedIn"><img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-PNG.png" height="40" /> </a>
                                </HomeIcon>
                                <HomeIcon>
                                    <a href="https://github.com/anujboddu" target="_blank" id="github"><img src={logo} height="40" /></a><br />
                                </HomeIcon>
                            </HomeIcons>
                            <HireButton>Hire Me</HireButton>
                            <PortfolioButton>Portfolio</PortfolioButton>
                        </div>
                        <BodyImage>
                            <img src={profilepic} width="100%" display="inline-block" />
                        </BodyImage>
                    </Profile>
                </HomePage>
            </Container>

        )
    }
};

export default Home; 