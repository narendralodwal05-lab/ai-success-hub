import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const lowerMessage = message.toLowerCase();

    // Date questions direct handle
    if (
      lowerMessage.includes("date") ||
      lowerMessage.includes("today") ||
      lowerMessage.includes("aaj")
    ) {
      const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      return NextResponse.json({
        reply: `Aaj ki date hai: ${today}`,
      });
    }

    // Normal AI response
    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a smart AI assistant. Give short, clear, accurate and human-like answers.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    })

    return NextResponse.json({
      reply:
        chatCompletion.choices[0]?.message?.content || "No response",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        reply: "Error generating response",
      },
      { status: 500 }
    );
  }
}