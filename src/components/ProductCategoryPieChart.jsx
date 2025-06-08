import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Electronics', value: 40 },
  { name: 'Clothing', value: 25 },
  { name: 'Home Goods', value: 20 },
  { name: 'Books', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ProductCategoryPieChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductCategoryPieChart;
