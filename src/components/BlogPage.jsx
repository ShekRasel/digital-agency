import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Web development is constantly evolving. In this post, we explore some of the latest trends in the web development space...',
      link: '#',
    },
    {
      title: 'UI/UX Design Principles for 2025',
      excerpt: 'User experience is more important than ever. In this article, we discuss key UI/UX principles that will define design trends in 2025...',
      link: '#',
    },
    {
      title: 'How to Build Scalable Web Applications',
      excerpt: 'Building scalable web applications requires careful planning. In this post, we share tips and techniques for creating scalable solutions...',
      link: '#',
    },
    {
      title: 'SEO Best Practices in 2025',
      excerpt: 'SEO is constantly changing. In this blog post, we discuss the most effective SEO strategies for 2025 and beyond...',
      link: '#',
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-screen-xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-12">
          Our Latest Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-8 rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-transparent opacity-40 z-0"></div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 z-10 relative">{post.title}</h2>
                <p className="text-lg text-gray-600 mb-6 z-10 relative">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-indigo-600 hover:text-indigo-800 font-medium relative z-10"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
