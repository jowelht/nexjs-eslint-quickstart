import React from "react";
import { useRouter } from "next/router";
import BlogPostData from "../../data/blogs.json";

const BlogDetails = () => {
    const router = useRouter();
    return (
        <div>
            BlogDetails
            <p>Post: {router.query.id} </p>
        </div>
    );
};

export default BlogDetails;

export const getStaticPaths = () => {
    const paths = BlogPostData.map((post) => ({
        params: { id: post.id },
    }));

    // { fallback: false } means other routes should 404
    return { paths, fallback: false };
};
