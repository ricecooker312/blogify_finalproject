import React from "react";

import Group from "./Group";
import BlogTopic from "./BlogTopic";
import ProfilePic from "./ProfilePic";

import './css/BlogPostCover.css'

const BlogPostCover = (props) => {
    return (
        <Group className={`blog-cover ${props.className}`} style={{
            gridRow: `span ${props.rowSpace}`,
            gridColumn: `span ${props.columnSpace}`
        }}>
            <BlogTopic className={props.topicClassName}>{props.topic}</BlogTopic>
            <ProfilePic className={`blog-cover__profile-pic ${props.profilePicClassName}`} />
            <p className={`blog-cover__username ${props.usernameClassName}`}>Saihan Rayeed</p>
            <h1 className={`${props.className}__title blog-cover__title`}>{props.children}</h1>
        </Group>
    )
}

export default BlogPostCover