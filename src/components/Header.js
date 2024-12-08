import React from "react";

import './css/Header.css'

const Header = (props) => {
    let className = props.center ? `center header-${props.type} ${props.className}` : `header-${props.type} ${props.className}`

    return (
        <p className={className}>{props.children}</p>
    )
}

export default Header