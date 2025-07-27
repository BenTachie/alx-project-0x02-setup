import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-1">{body}</p>
      <span className="text-sm text-gray-500">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
