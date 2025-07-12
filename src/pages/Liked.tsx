import React from 'react';
import Navbar from '../components/Navbar';

const Liked: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Liked Items</h2>
        {/* Render liked items here */}
        <div className="bg-surface p-4 rounded shadow text-muted-foreground">
          No liked items yet.
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Liked Categories</h2>
        {/* Render liked categories here */}
        <div className="bg-surface p-4 rounded shadow text-muted-foreground">
          No liked categories yet.
        </div>
      </section>
    </div>
    </>
  );
};

export default Liked;
