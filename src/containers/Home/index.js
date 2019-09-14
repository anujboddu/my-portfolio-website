import React from "react";
import { Homestyles, HomeIcons, HomeIcon, PortfolioButton,
    Portfolio, PortfolioElements, BodyText, GreetingText, Name , HireButton} from './styles';
    import logo from '../../assets/GitHub.png';
    import profile from '../../assets/profileimage.png';

class Home extends React.Component {

    render() {
        return (
            <div>
            <Homestyles>
                <Portfolio>
                    <PortfolioElements>Portfolio</PortfolioElements>
                </Portfolio>
                {/* <HomeNav>
                    <HomeNavElements>About</HomeNavElements>
                    <HomeNavElements>Portfolio</HomeNavElements>
                    <HomeNavElements>Contact</HomeNavElements>
                </HomeNav> */}
            </Homestyles>
            <BodyText>
                <GreetingText>Hello, I am</GreetingText>
                <Name>Anuj <br/> Boddu</Name>
                <p>A young UX/UI Designer with crazy for mobile & web design.</p>
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
            </BodyText>
            <div>
                <img src = {profile} />
                </div>
            </div> 

        )
    }
};

export default Home; 