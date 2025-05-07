'use client';

import { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);

    try {
      const response = await fetch('/api/generateText', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      if (data.status === 'success' && data.outputText) {
        setOutputText(data.outputText);
      } else {
        throw new Error(data.error || 'Failed to generate response');
      }
    } catch (error: unknown) {
      console.error('page Error:', error);
      setOutputText(`${error || 'Something went wrong'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">AI Text Generator</h1>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here..."
          rows={6}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 text-gray-800"
        />

        <button
          onClick={handleGenerate}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {loading ? 'Generating...' : 'Generate AI Response'}
        </button>

        {outputText && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h2 className="font-bold text-xl mb-4 text-gray-800">AI Response:</h2>
            <p className="text-gray-800">{outputText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
