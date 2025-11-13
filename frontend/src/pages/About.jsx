import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-sky-600">
          About DevSphere
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-base leading-relaxed text-center">
          <strong>DevSphere</strong> is your go-to platform for practical DevOps tutorials. 
          We simplify complex concepts with bite-sized, actionable guides for engineers and tech enthusiasts.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-sm">
          <div>
            <h2 className="text-lg font-semibold text-sky-600 mb-2">What You Will Learn</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Cloud Platforms: AWS, Azure, GCP</li>
              <li>Docker & Kubernetes</li>
              <li>CI/CD Pipelines & Automation</li>
              <li>Monitoring, Security & Infrastructure as Code</li>
              <li>Linux & Networking</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-sky-600 mb-2">Why DevSphere?</h2>
            <p className="leading-relaxed">
              Tutorials are concise, practical, and suitable for both beginners and experienced engineers. 
              Learn confidently and apply skills in real-world scenarios.
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div>
          <h2 className="text-lg font-semibold text-sky-600 mb-2">Join Our Learning Community</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Explore our tutorials, follow step-by-step guides, and enhance your DevOps skills — learning made simple and interactive.
          </p>
        </div>
      </div>
    </div>
  );
}
