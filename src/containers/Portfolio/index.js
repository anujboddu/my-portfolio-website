import React from "react";
import {
    PortfolioContainer, Framewrapper1, Frameitem, Framewrapper2
} from './styles';

class Portfolio extends React.Component {

    render() {
        return (
            <PortfolioContainer>
                <Framewrapper1>
                    <Frameitem>
                        The need For Uncertainity
                    </Frameitem>
                    <Frameitem>
                        The International Art Dealer encouranges museum goers to disconnect from their audio devicesand ignore the wall labels
                    </Frameitem>
                </Framewrapper1>
                <Framewrapper2>
                <Frameitem>
                        The need For Uncertainity
                    </Frameitem>
                    <Frameitem>
                        The International Art Dealer encouranges museum goers to disconnect from their audio devicesand ignore the wall labels
                    </Frameitem>
                </Framewrapper2>
            </PortfolioContainer>
        )
    }
};


export { Portfolio }; 