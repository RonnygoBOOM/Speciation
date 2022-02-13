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
                    <br></br>Simultaneously, and at an exponentially increasing time interval, the original gen 1 creature will metamorphose to a later stage in its life.<br></br>
                    One idea is a starcraft-like game in a massive universe where you can spread and grow new colonies.  The colony will take on some of the characteristics of the NFT (color, style etc..) but also receive bonuses based on the traits.
                    These bonuses will be small, and not game-breaking, but noticeable. (5% buffs to build speed, or 3% reduction in transfer fee costs) Having a colony will generate currency over time. Collecting currency and storing it locally is more secure, and a smaller percentage of it can be taken
                    when your hive gets attacked. Storing currency costs currency, though. To prevent bots from auto storing currency every time it is earned, and to encourage a balance of growing a big pot before
                    storing it, or transferring it (which also costs currency) there will be a % fee for transferring wealth that decreases as the pot gets bigger.  It starts at 50% and drops with a direct square pattern ending assymptotically.
                    Building bases costs time and currency. Players will have to decide if they want to spend more time and resources building their base or expanding to a new location and starting a new one. Destroying a base should take less time than creating a base, but there 
                    should be many creative ways to do it. 
                    There will be a VAST map with MANY open areas. Different resources are more abundant in some areas than others. Resources can be traded locally, or far away, with proportional
                    costs in both time and resources.  
                    For animation and design, I will need an extremely simple, cute, biological organism (Think grub, bacteria, blob, slime, larva or worm) that can evolve to have features that
                    are more functional, sometimes predatory like claws, teeth, etc. Pokemon did this well with their evolutions, but since each creature spawns new NFTs, it needs to be from a group of traits
                    rather than a linear scheme like pokemon. 

            
                </h3>
            </div>
        );
    }
};

export default About;