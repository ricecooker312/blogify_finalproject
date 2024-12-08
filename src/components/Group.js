import React from 'react'

import './css/Group.css'

const Group = (props) => {
    let className = props.className ? `bdgr-1x8y3e ${props.className}` : 'bdgr-1x8y3e'

    if (props.block) {
        className += className === '' ? 'block' : ' block'
    }

    return (
        <div style={props.style} className={className}>
            {props.children}
        </div>
    )
}

export default Group