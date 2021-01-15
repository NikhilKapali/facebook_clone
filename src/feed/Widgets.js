import React from 'react'
import Iframe from 'react-iframe';
import './Widget.css'

function Widgets() {
    return (
        <div className="widget">
            <Iframe width="300" height="600" src="https://www.youtube.com/embed/VaKzNtwPQxE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </div>
    )
}

export default Widgets
