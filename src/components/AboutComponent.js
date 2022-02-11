import React, { Component } from 'react';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <h3 classname="about-text">Speciation is an NFT game loosely based on the concept of evolution. It starts with a single minted NFT: The Dream Pool. From there, at a set interval of time, 1 week, an NFT will spawn in the same wallet. 
                    This NFT will be a generation 1 creature, with very simple attributes. It may resemble a simple worm.  Every month, this creature will have an offspring, which is a newly minted NFT creature, simlar to it, but with additional mutated traits such as eyes, limbs, teeth, etc. It will have unique traits that are randomly generated from its cohort pool. That NFT, will, in turn, mint a new NFT each month with traits from a new cohort pool that will be added on top of those traits, such as sensory organs, limbs, armor, etc.
                    <br></br>Simultaneously, and at an exponentially increasing time interval, the original gen 1 creature will metamorphose to a later stage in its life. 
            
                </h3>
            </div>
        );
    }
};

export default About;