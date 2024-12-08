import React from "react";

import Group from "./Group";

import './css/BlogTopic.css';

const BlogTopic = (props) => {
    return (
        <Group className={`${props.className} blog-topic`}>{props.children}</Group>
    )
}

export default BlogTopic