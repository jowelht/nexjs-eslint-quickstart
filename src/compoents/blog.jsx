import React from 'react';

const BlogCard = ({ title, subTitle, id }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

export default BlogCard;
