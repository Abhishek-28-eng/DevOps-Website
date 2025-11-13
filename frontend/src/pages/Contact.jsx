import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("DevOpsDaily contact from " + name);
    const body = encodeURIComponent(message + `\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:abhishektalole47@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <form onSubmit={submit} className="space-y-4">
          <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" className="w-full p-2 border rounded" />
          <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" className="w-full p-2 border rounded" />
          <textarea required rows="6" value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" className="w-full p-2 border rounded" />
          <button className="px-4 py-2 bg-primary text-white rounded">Send</button>
        </form>
      </div>
    </div>
  );
}
