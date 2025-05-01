import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: NextRequest) {
  try {
    // Test with a simple prompt
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: "What is the capital of Italy?" }
      ],
      temperature: 0.7,
      max_tokens: 10,
    });
    
    return NextResponse.json({ 
      status: "success",
      message: completion.choices[0].message.content,
      model: completion.model
    }, { status: 200 });
  } catch (error: any) {
    console.error('API Test Error:', error);
    return NextResponse.json({ 
      status: "error",
      error: error.message 
    }, { status: 500 });
  }
} 