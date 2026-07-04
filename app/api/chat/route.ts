import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful AI assistant. Give short, clean, simple answers in plain text. Do not use tables, markdown, symbols, or unnecessary formatting.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "openai/gpt-oss-20b",
    });

    return NextResponse.json({
      reply: chatCompletion.choices[0]?.message?.content,
    });
  } catch (error) {
    console.log("GROQ ERROR:", error);

    return NextResponse.json({
      reply: "AI Error",
    });
  }
}