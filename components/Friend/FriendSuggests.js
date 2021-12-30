import React from "react";
import Friend from "./Friend";

export default function FriendSuggests() {
  return (
    <div>
      <h3 className="text-white">Friend Suggestions</h3>
      <Friend />
      <Friend />
      <Friend />
      <Friend />
      <div align="center">
        <button className="rounded-full flex items-center gap-2 text-[#06b6d4] text-sm p-3">
          Show More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
