import React from "react";

const TOPICS = [
  { id: "k8s", title: "Kubernetes", desc: "Pods, services, and operators" },
  { id: "aws", title: "AWS", desc: "EC2, S3, IAM and infra" },
  { id: "ci", title: "CI/CD", desc: "Pipelines and automation" },
  { id: "docker", title: "Docker", desc: "Images & registries" },
  { id: "security", title: "Security", desc: "Hardening & policies" },
  { id: "monitoring", title: "Monitoring", desc: "Prometheus, Grafana" }
];

export default function TopicsGrid({ onSelect }) {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mt-6">
      {TOPICS.map(t => (
        <button key={t.id} onClick={()=>onSelect?.(t.title)} className="bg-white p-3 rounded-md text-left shadow-sm hover:shadow-md">
          <div className="font-semibold">{t.title}</div>
          <div className="text-xs text-gray-500">{t.desc}</div>
        </button>
      ))}
    </div>
  );
}
