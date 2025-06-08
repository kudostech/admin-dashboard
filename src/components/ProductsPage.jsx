// src/components/ProductsPage.jsx
import React from 'react';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'iPhone 15', price: '$999' },
    { id: 2, name: 'Samsung Galaxy S24', price: '$899' },
    { id: 3, name: 'MacBook Air M3', price: '$1199' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Products List</h2>
      <table className="w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id}>
              <td className="border px-4 py-2">{prod.name}</td>
              <td className="border px-4 py-2">{prod.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
