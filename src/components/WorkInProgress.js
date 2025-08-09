import React from "react";
import { Wrench } from "lucide-react";

export default function WorkInProgress({ message = "We're working on this page." }) {
  return (
    <div className="flex flex-col items-center justify-center h-[84vh] py-20 text-center">
      <Wrench size={48} className="text-primary mb-4 animate-spin-slow" />
      <h1 className="text-2xl font-bold mb-2">{message}</h1>
      <p className="text-gray-500 max-w-md">
        Check back soon for exciting updates and new content.
      </p>
    </div>
  );
}
