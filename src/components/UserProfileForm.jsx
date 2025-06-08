import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Must be a valid email").required("Email is required"),
  age: yup.number().positive().integer().required("Age is required"),
});

const UserProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md p-4 border rounded 
      bg-white text-black dark:bg-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
      
      <div className="mb-4">
        <label className="block mb-1">Name:</label>
        <input
          {...register("name")}
          className="w-full p-2 border border-gray-300 rounded 
          bg-white text-black placeholder-gray-400 
          dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
          placeholder="Enter your name"
        />
        <p className="text-red-600 text-sm mt-1">{errors.name?.message}</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email:</label>
        <input
          {...register("email")}
          className="w-full p-2 border border-gray-300 rounded 
          bg-white text-black placeholder-gray-400 
          dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
          placeholder="Enter your email"
        />
        <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Age:</label>
        <input
          type="number"
          {...register("age")}
          className="w-full p-2 border border-gray-300 rounded 
          bg-white text-black placeholder-gray-400 
          dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 dark:border-gray-600"
          placeholder="Enter your age"
        />
        <p className="text-red-600 text-sm mt-1">{errors.age?.message}</p>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default UserProfileForm;
