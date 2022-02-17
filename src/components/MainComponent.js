import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import ParallaxTextScroll from './ParallaxTextScrollComponent';
import ResponsiveCardHover from './ResponsiveCardHoverComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        };

    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/about' component={About} />
                    <Route path='/parallaxTextScroll' component={ParallaxTextScroll} />
                    <Route path='/responsiveCardHover' component={ResponsiveCardHover} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}
export default Main;