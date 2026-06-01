'use client';

import React from 'react';
import { Card, Button } from '@/components/ui';
import { Play, BrainCircuit, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Experience MindDump</h1>
        <p className="text-foreground/60">See how easy it is to declutter your mind in under 60 seconds.</p>
      </div>

      <Card className="aspect-video relative overflow-hidden group cursor-pointer border-primary/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <Play className="w-10 h-10 fill-current ml-1" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-left">
          <h3 className="text-xl font-bold text-white">Full Platform Walkthrough</h3>
          <p className="text-white/70 text-sm">Dashboard, Dump, and AI Analysis in action.</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Step 1", title: "Dump", desc: "Speak or type your raw thoughts." },
          { label: "Step 2", title: "Categorize", desc: "AI automatically organizes data." },
          { label: "Step 3", title: "Act", desc: "Sync to your favorite tools." },
        ].map((step, i) => (
          <Card key={i} className="p-6 text-left space-y-2">
            <span className="text-xs font-bold text-primary uppercase">{step.label}</span>
            <h4 className="font-bold">{step.title}</h4>
            <p className="text-xs text-foreground/40">{step.desc}</p>
          </Card>
        ))}
      </div>

      <div className="pt-8">
        <Button size="lg" className="px-12 h-16 text-xl">Try It Yourself</Button>
      </div>
    </div>
  );
}
