import BlogCard from '@/compoents/blog';

const blog = [
    { id: 1, title: 'jowel', subTitle: 'web designer' },
    { id: 2, title: 'Reza', subTitle: 'designer' },
];

const Home = () => {
    return (
        <>
            {blog.map((item) => (
                <BlogCard
                    key={item.id}
                    title={item.title}
                    subTitle={item.subTitle}
                />
            ))}
        </>
    );
};
export default Home;
