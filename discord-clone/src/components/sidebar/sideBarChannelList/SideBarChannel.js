import React from 'react'
import './SideBarChannel.css'


const SideBarChannel = ({id, channel}) => {
    return (
        <div className="sideBarChannel">
            <h4>
                <span className="sideBarChannel__hash">#</span>
                Youtube
            </h4>
        </div>
    )
}

export default SideBarChannel
