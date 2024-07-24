'use client';
import React from 'react';
import Layout from '../../Layout';

function page() {
  return (
    <Layout>
      <main className="w-full p-6">
        <h1 className="font-bold">Categories | Form</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col gap-2 mt-5">
            <label className="text-gray-500">
              Category Name<span className="text-red-500">*</span>
            </label>
            <input
              className="px-4 py-2  rounded-full border bg-grey-50"
              placeholder="Enter Your Name"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label className="text-gray-500">
              Category Slug<span className="text-red-500">*</span>
            </label>
            <input
              className="px-4 py-2  rounded-full border bg-grey-50"
              placeholder="Enter Category Slug"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label className="text-gray-500">
              Image<span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Submit"
              type="file"
              accept="image/*"
              onChange={(e) => {
                e.preventDefault();
              }}
              required
            />
          </div>
          <button
            className="px-4 py-2 mt-3 bg-blue-500 text-white rounded-full"
            type="submit"
          >
            Create
          </button>
        </form>
      </main>
    </Layout>
  );
}

export default page;
