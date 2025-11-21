import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      
      {/* Hero Section */}
      <header className="w-full py-20 bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg rounded-b-3xl">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            About Devwithabhi
          </h1>
          <p className="mt-4 text-blue-50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Your premium destination for practical, real-world DevOps learning.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-14">

        {/* Intro Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-100 shadow-xl rounded-3xl p-8 text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong className="text-sky-700">Devwithabhi</strong> is a modern learning platform built
            for aspiring DevOps engineers. We convert complex concepts into
            simple, actionable guides — helping you grow your skills with
            real-world examples, clarity, and confidence.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-100 shadow-lg p-8 rounded-3xl">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">What You Will Learn</h2>
            <ul className="space-y-2 text-gray-700 text-base">
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">•</span> Cloud Platforms: AWS, Azure, GCP
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">•</span> Docker & Kubernetes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">•</span> CI/CD Pipelines & Automation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">•</span> Monitoring, Security & IaC (Terraform)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 mt-1">•</span> Linux & Computer Networking
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-white/70 backdrop-blur-xl border border-gray-100 shadow-lg p-8 rounded-3xl">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Why Devwithabhi?</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Every tutorial is crafted with precision. No unnecessary theory,
              only practical, hands-on knowledge. Whether you're a beginner or an
              experienced engineer, our step-by-step content helps you implement
              solutions in real projects with confidence.
            </p>
          </div>

        </div>

        {/* Community Section */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-100 shadow-lg p-8 rounded-3xl text-center">
          <h2 className="text-xl font-semibold text-sky-700 mb-3">
            Join the Learning Community
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-base">
            Follow tutorials, practice along with hands-on labs, and grow your
            DevOps career faster. Learning DevOps has never been this simple,
            engaging, or beginner-friendly.
          </p>
        </div>

      </section>
    </div>
  );
}
