"use client";
import React, { useState } from "react";

interface Comment {
  name: string;
  email: string;
  comment: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name || !email || !comment) {
      setError("Please fill out all fields.");
      return;
    }

    // Creating a new comment
    const newComment: Comment = {
      name,
      email,
      comment,
      date: new Date().toLocaleDateString(),
    };

    // Add the new comment to the list
    setComments([newComment, ...comments]);

    // Clear input fields
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
      <div className="p-6 shadow-lg border-2 rounded-md">
        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment"
            rows={4}
            className="w-full p-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:ring-black transition"
          >
            Post Comment
          </button>
        </form>

        {/* Display Comments */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>
          {comments.length === 0 ? (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          ) : (
            comments.map((c, index) => (
              <div key={index} className="mb-4 border-b pb-4">
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-gray-500">{c.date}</p>
                <p className="mt-2">{c.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
