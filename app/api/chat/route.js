import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { getContextString } from "@/utils/data/knowledge-base";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key is not configured" },
        { status: 500 }
      );
    }

    // Get knowledge base context
    const context = getContextString();

    // Build messages array for Groq
    const messages = [
      {
        role: "system",
        content: `You are an AI assistant representing Ameer Hamza's portfolio. Your job is to answer questions about Ameer's background, skills, experience, projects, and contact information based on the following information:

${context}

Guidelines:
- Be friendly, professional, and helpful
- Answer questions based ONLY on the provided information
- If asked about something not in the portfolio, politely say you don't have that information
- Keep responses concise but informative
- If asked for contact information, provide the email and LinkedIn
- Highlight Ameer's expertise in AI integration and no-code development
- When discussing projects, mention specific achievements and technologies used`
      },
      // Include conversation history for context
      ...conversationHistory,
      {
        role: "user",
        content: message
      }
    ];

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages: messages,
      model: "llama-3.3-70b-versatile", // Updated to latest supported model
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
    });

    const response = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response.";

    return NextResponse.json({
      response: response,
      success: true
    });

  } catch (error) {
    console.error("Error in chat API:", error);

    return NextResponse.json(
      {
        error: "Failed to process your message. Please try again.",
        details: error.message
      },
      { status: 500 }
    );
  }
}
