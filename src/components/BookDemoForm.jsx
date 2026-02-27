"use client";
import React, { useState } from "react";

const BookDemoForm = ({ onSuccess }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "2119b873-d098-426a-b446-d054780c0ece");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("Demo booked successfully! We'll call you soon.");
      event.target.reset();
      onSuccess?.(); // Close modal
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Book a Free Demo
      </h2>

      {/* NAME */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1 text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          required
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
          placeholder="John Doe"
        />
      </div>

      {/* CLASS (1-10 Dropdown) */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1 text-gray-700">
          Class *
        </label>
        <select
          name="class"
          required
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all appearance-none bg-white"
        >
          <option value="">Select Class</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
          <option value="5">Class 5</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
      </div>

      {/* PHONE */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1 text-gray-700">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          required
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all"
          placeholder="+91 98765 43210"
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Booking..." : "Book Demo"}
      </button>

      {/* RESULT MESSAGE */}
      {result && (
        <p className="text-center mt-4 p-3 rounded-lg font-medium text-green-600 bg-green-50 border border-green-200">
          {result}
        </p>
      )}
    </form>
  );
};

export default BookDemoForm;
