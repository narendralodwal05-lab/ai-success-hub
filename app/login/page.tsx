"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created successfully! Check your email.");
    }
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login Successful!");
      window.location.href = "/dashboard";
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 p-8 rounded-xl w-96">
        <h1 className="text-3xl text-white font-bold mb-6">
          Login
        </h1>

        <input
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-6 rounded bg-gray-800 text-white"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signIn}
          className="w-full bg-blue-600 text-white p-3 rounded mb-3"
        >
          Login
        </button>

        <button
          onClick={signUp}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}