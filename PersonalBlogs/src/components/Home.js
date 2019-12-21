import React from 'react';
import  '../scss/Home.scss'
import LogList from './homepage/LogList'
import Complex from './homepage/Complex'

class Home extends React.Component{
    render() {
        return (
            <div id="home">
                <div className="home-main">
                    <div className="log">
                        <LogList></LogList>
                    </div>
                    <div className="complex">
                        <Complex></Complex>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;