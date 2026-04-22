/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Network, Table, Database, FileCheck, Brain, Shield, Lock, EyeOff, UserCheck, LayoutGrid } from 'lucide-react';

export function CapabilitiesGrid() {
  const capabilities = [
    { icon: Network, title: 'Agentic Retrieval', desc: "Intelligent agents that don't just search—they hunt for meaning across formats." },
    { icon: Table, title: 'Excel-Native Search', desc: 'Direct indexing of cell-level data and formulas in complex underwriting models.' },
    { icon: Database, title: 'Graph RAG Knowledge', desc: 'Understand how a PDF deck from Portfolio Company A relates to an Excel in B.' },
    { icon: FileCheck, title: 'Source-Cited Synthesis', desc: 'Zero hallucination. Every response includes a direct link to the source document.' },
    { icon: Brain, title: 'Institutional Memory', desc: 'Capture deal logic even after the lead associate has departed the firm.' },
    { icon: Shield, title: 'Permission Aware', desc: 'Inherits your existing SSO and document-level permission structures.' }
  ];

  return (
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-white mb-16">Built for High-Stakes Finance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-card border border-zinc-800 bg-deep-slate p-8 hover:bg-black/40 transition-colors"
            >
              <cap.icon className="h-8 w-8 text-ember-orange mb-4" />
              <h3 className="mb-2 text-xl font-serif text-white">{cap.title}</h3>
              <p className="text-zinc-400 font-sans leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  return (
    <section className="bg-deep-dark py-24 px-6 border-y border-zinc-900">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl md:text-6xl font-serif text-white mb-16">Tailored Workflows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              role: 'Analysts & Associates',
              title: 'Accelerate Diligence',
              desc: 'Cut down manual data entry and "file hunting" by 80%. Generate comparison tables across ten portfolio companies in seconds.'
            },
            {
              role: 'Partners & MDs',
              title: 'Instant Insight',
              desc: 'Ask direct questions about portfolio exposure or historic deal terms and get synthesized answers on your mobile device.'
            }
          ].map((useCase) => (
            <div key={useCase.title} className="group rounded-card border border-zinc-800 bg-deep-slate p-8 transition-colors hover:border-ember-orange/50">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ember-orange">{useCase.role}</span>
              <h3 className="mt-2 mb-4 text-2xl font-serif text-white tracking-tight">{useCase.title}</h3>
              <p className="mb-6 text-zinc-400 font-sans leading-relaxed">{useCase.desc}</p>
              <div className="flex items-center gap-2 text-ember-orange font-medium cursor-pointer">
                <span>Learn more</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecuritySection() {
  const features = [
    { icon: Shield, label: 'SOC 2 Type II' },
    { icon: Lock, label: 'AES-256 Encryption' },
    { icon: EyeOff, label: 'Zero-Data Training' },
    { icon: UserCheck, label: 'Custom VPC Options' }
  ];

  return (
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-6">
          <span className="font-mono text-xs text-ember-orange uppercase tracking-widest">Enterprise Ready</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">Your data is yours. Period.</h2>
          <p className="text-xl text-zinc-400 font-sans max-w-xl">
            Ember is built with the highest standards of financial security. We never train on your private deal data.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <f.icon className="h-6 w-6 text-ember-orange" />
                <span className="text-zinc-300 font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-ember-orange/5 mix-blend-overlay rounded-card" />
          <div className="rounded-card border border-zinc-800 overflow-hidden shadow-2xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_TD327qx7WcFbdPNfpc6v9LFpRKJwMkm43iIJZrfEkmcMaDWn9gz6v7Sr5hROvxOGCDflG_EV7AvJX78yq5RZ0lrDYt37rlmM2atgnWQ_-jtotknuFb4jJjAf05Y6UqwAloQ-xC7QQLLT0Kj7ECOzwLw9KYT09mjuBAmHPTIMDopUNVqrRYAF5-0vKB-Q3BM9pi9FPzrj2msphVRYuv0LJWsiSOSOCzIjyMm2iQ6onmZ5VMBJD5h17XZDQpJs1cJphyQ4vNmvJWE" 
              alt="Security Infrastructure"
              className="w-full opacity-60 transition-opacity duration-700 group-hover:opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
