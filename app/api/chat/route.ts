import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are an advanced AI assistant like ChatGPT.

Rules:
1. Give accurate and smart answers.
2. Explain in simple language.
3. If user asks current date/time, use system date.
4. Give detailed answers when needed.
5. Be natural, helpful, and human-like.
6. Format answers clearly.
7. Solve coding and technical questions properly.
          `,
        },
        {
          role: "user",
          content: `Current date: ${new Date().toDateString()}
User question: ${message}`,
        },
      ],
      temperature: 0.7,
      max_completion_tokens: 1024,
    });

    return NextResponse.json({
      reply: response.choices[0]?.message?.content || "No response",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      reply: "Something went wrong while generating response.",
    });
  }
}