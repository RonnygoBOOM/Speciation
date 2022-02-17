import React, { Component } from 'react';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

class ResponsiveCardHover extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <>
                <div className="card-hover">
                    <div className="card">  
                        <div className="circle">
                            <div class="content">
                                <h2>Meet the Crocs</h2>
                                <p>The Cardano Crocs Club is an NFT collection on the 
                                    Cardano blockchain. Every Croc can be staked to earn CCC tokens for use in upcoming games, as well as the gaming incubator in the metaverse.    
                                </p>
                            </div>
                            <img className="croc-png" src="assets/images/croc1.png"></img>
                        </div>    
                    </div>
                </div>
            </>
        );
    }
};
export default ResponsiveCardHover;