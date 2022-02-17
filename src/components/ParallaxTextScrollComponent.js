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
        position.style.setProperty('--x', e.clientY + 'px')
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
                        <h2 className="i1"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i2"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i3"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i4"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i5"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i6"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i7"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i8"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                        <h2 className="i9"><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span><span>Text Example</span></h2>
                    </div>
                </section>
            </div>
        )
    }
};

export default ParallaxTextScroll;