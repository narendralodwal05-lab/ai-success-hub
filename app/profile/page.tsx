"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");

  const saveProfile = async () => {
    const { error } = await supabase.from("profiles").insert([
      {
        name,
        email,
        skills,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Profile saved successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">👤 User Profile</h1>

      <div className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Skills"
          className="w-full p-3 rounded bg-gray-800"
          onChange={(e) => setSkills(e.target.value)}
        />

        <button
          onClick={saveProfile}
          className="w-full bg-blue-600 p-3 rounded"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
}