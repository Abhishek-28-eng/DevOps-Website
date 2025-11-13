import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Practical DevOps tutorials — short & clear</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Step-by-step guides for DevOps engineers — no fluff, just working examples you can copy & run.</p>
      </div>
    </section>
  );
}
