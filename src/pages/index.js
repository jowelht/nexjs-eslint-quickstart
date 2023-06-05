import BlogCard from "@/compoents/blog";
import Header from "@/layouts/header-01";
import BlogPostData from "../data/blogs.json";

const Home = ({ posts }) => {
    return (
        <>
            <Header />
            {posts.map((item) => (
                <BlogCard
                    key={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                    name={item.name}
                    id={item.id}
                />
            ))}
        </>
    );
};

export const getStaticProps = () => {
    const posts = BlogPostData;
    return {
        props: {
            posts,
        },
    };
};

export default Home;
