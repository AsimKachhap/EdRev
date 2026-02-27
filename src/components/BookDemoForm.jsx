"use client";
import React, { useState } from "react";

const BookDemoForm = () => {
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
      setResult("Your message was sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Book a Free Demo</h2>

      {/* NAME */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          required
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          required
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          required
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        ></textarea>
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold 
                   active:scale-95 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      {/* RESULT MESSAGE */}
      {result && (
        <p className="text-center mt-2 text-sm font-medium text-green-600">
          {result}
        </p>
      )}
    </form>
  );
};

export default BookDemoForm;
