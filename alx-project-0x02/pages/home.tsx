import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Home Page</h1>

      <Card
        title="Welcome to ALX Project 2"
        content="This project demonstrates reusable components, API integration, and routing with Next.js + TypeScript."
      />
      <Card
        title="Why Reusability Matters"
        content="Reusable components help reduce code duplication and make applications easier to scale and maintain."
      />
      <Card
        title="Styled with Tailwind CSS"
        content="Tailwind's utility-first approach allows you to build modern, responsive UIs quickly and efficiently."
      />
    </div>
  );
};

export default HomePage;
