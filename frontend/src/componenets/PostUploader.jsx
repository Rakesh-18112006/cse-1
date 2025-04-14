import React, { useState } from "react";

const PostUploader = () => {
  const [posts, setPosts] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (photo && description) {
      setPosts([{ photo, description }, ...posts]);
      setPhoto(null);
      setDescription("");
    } else {
      alert("Please upload a photo and enter a description.");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <form
        onSubmit={handlePostSubmit}
        className="p-4 bg-white rounded-2xl shadow-md mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a description..."
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700"
        >
          Post
        </button>
      </form>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-2xl shadow-md flex flex-col"
          >
            <img
              src={post.photo}
              alt="Uploaded"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostUploader;
