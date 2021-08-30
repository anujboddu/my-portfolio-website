import React from "react";
import {
    Container, HomePage, HomeIcon, HomeIcons, PortfolioButton, BodyImage, LangButtons, HamburgerBar, HamburgerBackground, TitleMain,
    Portfolio, PortfolioElements, Profile, IntroText, Summary, styles, GreetingText, Name, HireButton,
    JobTitle} from './styles';
// import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/GitHub.png';
// import 'antd/dist/antd.css';
import profilepic from '../../assets/profilepic.jpg';
import {
    MenuOutlined
  } from '@ant-design/icons';
// import { Menu, Button } from 'antd';
// const { SubMenu } = Menu;

class Home extends React.Component {
    state = {
        collapsed: false,
      };

    render() {
        let calc2 = (z) => z * 10;

        let calc1 = (x,y) => {
          return (x * y) + calc2(x);
        };

let values = [2,3];
const example= calc1.apply(this, values);
console.log(example);
return (
            <Container>
                <HomePage>
                    {/* <Portfolio>
                        <h1>Aj</h1>
                    </Portfolio> */}
                    <Profile>
                        <IntroText>
                            <GreetingText>I am Anuj</GreetingText>
                            {/* <Name>Anuj Boddu</Name> */}
                            <Summary>A young Designer with crazy for mobile & web design A young Designer with crazy for mobile & web design  .</Summary>
                            {/* <h4>Find Me on</h4> */}
                            {/* <HomeIcons>
                                <HomeIcon>
                                    <a href="https://www.linkedin.com/in/anuj-boddu-abba74aa" target="_blank" id="linkedIn"><img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-PNG.png" height="40" /> </a>
                                </HomeIcon>
                                <HomeIcon>
                                    <a href="https://github.com/anujboddu" target="_blank" id="github"><img src={logo} height="40" /></a><br />
                                </HomeIcon>
                            </HomeIcons> */}
                            <HireButton>Hire Me</HireButton>
                            {/* <PortfolioButton>Portfolio</PortfolioButton> */}
                        </IntroText>
                        <BodyImage>
                            <img src={profilepic} position="relative" left="250px" width="70%" height="90%" object-fit="contain"/>
                        </BodyImage>
                        <HamburgerBar>
                            {/* <HamburgerBackground>
                                <MenuOutlined />
                            </HamburgerBackground> */}
                            <TitleMain>
                              <JobTitle>UI/UX Designer</JobTitle>
                            </TitleMain>
                        </HamburgerBar>
                    </Profile>
                </HomePage>
            </Container>

        )
    }
};

export default Home; 