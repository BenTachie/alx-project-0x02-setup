import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

// Instead of ["getStaticProps"]
const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: PostProps[] = await res.json();
      setPosts(data.slice(0, 10)); 
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          userId={post.userId}
          id={post.id}
        />
      ))}
      </div>
    </div>
  );
};

export default PostsPage;
