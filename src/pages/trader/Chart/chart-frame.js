
import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class ChartFrame extends Component {
    render() {
        return (
            <div>

<Iframe src="https://demo.chartiq.com/"
        width="1100px"
        height="700px"
        allowFullScreen
        // loading="lazy"
        // id="myId"
        // className="myClassname"
        display="initial"
        position="relative"/>
                
            </div>
        )
    }
}
