import React, { useEffect } from 'react'

import Group from './Group'

import './css/BlogGroup.css'

const BlogGroup = (props) => {
    return (
        <Group className={`blog-container ${props.className}`} style={{
            gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
            gridTemplateRows: `repeat(${props.rows}, 1fr)`
        }}>
            {props.children}
        </Group>
    )
}

export default BlogGroup