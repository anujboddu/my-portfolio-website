import React from "react";
import { Homestyles, HomeIcons, HomeIcon, PortfolioButton, BodyImage, LangButtons, 
    Portfolio, PortfolioElements, BodyText, GreetingText, Name , HireButton} from './styles';
    import logo from '../../assets/GitHub.png';
    import profilepic from '../../assets/developer.svg';

class Home extends React.Component {

    render() {
        return (
            <div>
            <Homestyles>
                <Portfolio>
                    <PortfolioElements>Portfolio</PortfolioElements>
                </Portfolio>
                {/* <LangButtons> */}
                    {/* <HomeNavElements>About</HomeNavElements>
                    <HomeNavElements>Portfolio</HomeNavElements>
                    <HomeNavElements>Contact</HomeNavElements> */}
                    {/* <li>EN</li><li>|</li>
                    <li>ES</li>  */}
                {/* </LangButtons> */}
            </Homestyles>
            <BodyText>
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
                <a href="https://github.com/anujboddu" target="_blank" id="github"><img src={logo} height="40"/></a><br/>
                </HomeIcon>
                </HomeIcons>
                <HireButton>Hire Me</HireButton>
                <PortfolioButton>Portfolio</PortfolioButton>
                </div>
                <BodyImage>
                <img src = {profilepic} width= "100%" display= "inline-block"/>
                </BodyImage>
                {/* <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul> */}
            </BodyText>
            </div> 

        )
    }
};

export default Home; 