import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white p-4 mb-4">
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-gray-600 mb-1">📧 {email}</p>
      <p className="text-sm text-gray-500">
        📍 Address: {address.street}, {address.suite}, {address.city} {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
