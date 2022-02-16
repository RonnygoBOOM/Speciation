import React, { Component } from 'react';

class ParallaxTextScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }




    render() {

    const position = document.documentElement;
    position.addEventListener("mousemove", e => {
        position.style.setProperty('--x', e.clientX + 'px')
    });

    const scrollText = {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins',
    }

    
        return (
            <div style={scrollText}>
                <section className="scrollTextSection">
                    <div className="scrollDiv">
                        <h2 style={scrollText}><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                        <h2><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span><span>Speciation</span></h2>
                    </div>
                </section>
            </div>
        )
    }
};

export default ParallaxTextScroll;