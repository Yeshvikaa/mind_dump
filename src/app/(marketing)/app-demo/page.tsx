'use client';

import { useState, useEffect } from 'react';
import { Card, Button } from '@/components/ui';
import { useRouter } from 'next/navigation';
import { analyzeThought } from '@/lib/ai-engine';

export default function TrialDumpPage() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('trialCount');
    if (stored) {
      setCount(Number(stored));
    }
  }, []);

  const handleProcess = async () => {
    if (!text.trim()) {
      alert('Please enter your thoughts');
      return;
    }

    // Limit = 5 AI uses
    if (count >= 5) {
      alert('Free trial limit reached. Please login to continue.');
      router.push('/login');
      return;
    }

    setLoading(true);

    try {
      // Run AI Engine
      const aiResult = await analyzeThought(text);

      if (aiResult) {
        setResult(aiResult);

        // Increase count only after successful AI analysis
        const newCount = count + 1;
        localStorage.setItem('trialCount', newCount.toString());
        setCount(newCount);
      }
    } catch (err) {
      console.log(err);
      alert('AI processing failed');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-8">

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">
          Trial Mind Dump
        </h1>

        <p className="text-foreground/60">
          Speak your mind — free trial remaining:
          <span className="font-semibold">
            {' '} {Math.max(0, 5 - count)} / 5
          </span>
        </p>
      </div>

      {/* Input Card */}
      <Card className="p-6 space-y-6 border-primary/20 shadow-2xl">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="I'm feeling overwhelmed today... I need to finish work, call someone, and I have an idea for a project..."
          className="w-full min-h-[260px] bg-transparent outline-none text-lg resize-none"
        />

        <Button
          onClick={handleProcess}
          disabled={loading}
          className="w-full h-14 text-lg"
        >
          {loading ? 'AI Thinking...' : 'Process with AI'}
        </Button>

      </Card>

      {/* AI Results */}
      {result && (
        <div className="grid md:grid-cols-2 gap-6">

          {result.tasks?.length > 0 && (
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-3">
                Tasks
              </h3>
              <ul className="space-y-2">
                {result.tasks.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>
          )}

          {result.ideas?.length > 0 && (
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-3">
                Ideas
              </h3>
              <ul className="space-y-2">
                {result.ideas.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>
          )}

          {result.worries?.length > 0 && (
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-3">
                Worries
              </h3>
              <ul className="space-y-2">
                {result.worries.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>
          )}

          {result.goals?.length > 0 && (
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-3">
                Goals
              </h3>
              <ul className="space-y-2">
                {result.goals.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>
          )}

          {result.reminders?.length > 0 && (
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-3">
                Reminders
              </h3>
              <ul className="space-y-2">
                {result.reminders.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </Card>
          )}

        </div>
      )}

    </div>
  );
}
