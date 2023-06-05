import Link from "next/link";

const BlogCard = ({ title, subTitle, id }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <Link href={`/blog/${id}`}>Read More</Link>
        </div>
    );
};

export default BlogCard;
