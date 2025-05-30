import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// add change some code
export async function POST(req: NextRequest) {
  try {
    const { inputText } = await req.json();

    if (!inputText) {
      return NextResponse.json(
        { error: 'Input text is required.' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: inputText }
      ],
      temperature: 0.9,
      max_tokens: 2048,
    });
    
    console.log('OpenAI response received:', completion);

    // Add response validation
    if (!completion?.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenAI');
    }

    return NextResponse.json({ 
      outputText: completion.choices[0].message.content,
      status: 'success'
    });
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json({ 
      error: error instanceof Error ? error : 'Error generating text',
      status: 'error'
    }, { 
      status: 500 
    });
  }
} 