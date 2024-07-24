import React from 'react';
import Layout from '../Layout';
import Link from 'next/link';
import { CirclePlus } from 'lucide-react';

function Page() {
  return (
    <Layout>
      <main className="p-6 w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Categories</h1>
          <Link href={'/admin/categories/form'}>
            <button className="flex gap-2 items-center bg-blue-500 px-4 py-2 text-white rounded-full">
              <CirclePlus />
              Add
            </button>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Page;
