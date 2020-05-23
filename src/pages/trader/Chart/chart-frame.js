
import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class ChartFrame extends Component {
    render() {
        return (
            <div>

<Iframe url="https://demo.chartiq.com/"
        width="1200px"
        height="700px"
        allowFullScreen
        loading="lazy"
        // id="myId"
        // className="myClassname"
        display="initial"
        position="relative"/>
                
            </div>
        )
    }
}
