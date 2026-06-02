'use client';

import React from 'react';
import { Card, Button } from '@/components/ui';
import { BrainCircuit, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DemoPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8 text-center">
      
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Experience MindDump</h1>
        <p className="text-foreground/60">
          See how easy it is to declutter your mind in under 60 seconds.
        </p>
      </div>

      {/* Real Video Section */}
      <Card className="overflow-hidden border-primary/20 shadow-2xl">
        <div className="aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/videos/minddump-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-6 bg-background text-left">
          <h3 className="text-xl font-bold">
            Full Platform Walkthrough
          </h3>
          <p className="text-foreground/60 text-sm">
            Dashboard, Dump, and AI Analysis in action.
          </p>
        </div>
      </Card>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          {
            label: "Step 1",
            title: "Dump",
            desc: "Speak or type your raw thoughts.",
          },
          {
            label: "Step 2",
            title: "Categorize",
            desc: "AI automatically organizes data.",
          },
          {
            label: "Step 3",
            title: "Act",
            desc: "Sync to your favorite tools.",
          },
        ].map((step, i) => (
          <Card key={i} className="p-6 text-left space-y-2">
            <span className="text-xs font-bold text-primary uppercase">
              {step.label}
            </span>
            <h4 className="font-bold">{step.title}</h4>
            <p className="text-xs text-foreground/40">
              {step.desc}
            </p>
          </Card>
        ))}
      </div>

      <div className="pt-8">
        <Button size="lg" className="px-12 h-16 text-xl">
          Try It Yourself
        </Button>
      </div>

    </div>
  );
}
