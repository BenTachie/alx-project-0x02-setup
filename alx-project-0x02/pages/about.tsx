import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen p-8 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About This Project</h1>

      <div className="flex flex-col items-center gap-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
      </div>
    </>
  );
};

export default AboutPage;
