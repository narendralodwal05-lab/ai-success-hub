"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";

export default function ResumePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Resume", 20, 20);

    doc.setFontSize(14);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 55);
    doc.text(`Skills: ${skills}`, 20, 70);
    doc.text(`Education: ${education}`, 20, 85);

    doc.save(`${name}-resume.pdf`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Resume Builder</h1>

      <div className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Skills (Example: C, Python, JavaScript)"
          value={skills}
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setSkills(e.target.value)}
        />

        <input
          type="text"
          placeholder="Education"
          value={education}
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setEducation(e.target.value)}
        />

        <button
          onClick={downloadPDF}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
          Download Resume PDF
        </button>
      </div>

      <div className="mt-10 bg-gray-900 p-6 rounded-xl max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>

        <p>
          <strong>Name:</strong> {name}
        </p>

        <p>
          <strong>Email:</strong> {email}
        </p>

        <p>
          <strong>Skills:</strong> {skills}
        </p>

        <p>
          <strong>Education:</strong> {education}
        </p>
      </div>
    </div>
  );
}