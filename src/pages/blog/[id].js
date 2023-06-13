import React from "react";
import BlogPostData from "../../data/blogs.json";

const BlogDetails = ({ post }) => {
    return (
        <div>
            BlogDetails
            <div className="border p-4">
                <p>Title: {post.title}</p>
                <p>sub title: {post.subTitle}</p>
            </div>
        </div>
    );
};
export const getStaticProps = ({ params }) => {
    const post = BlogPostData.find((item) => item.id === Number(params.id));

    return {
        props: {
            post,
        },
    };
};

export const getStaticPaths = () => {
    const paths = BlogPostData.map((post) => ({
        params: {
            id: post.id.toString(),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

export default BlogDetails;
