/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, Linkedin, Mail } from 'lucide-react';

export function DeploymentSteps() {
  const steps = [
    { num: '1', title: 'Connect', desc: 'Securely link SharePoint, CRM, and cloud drives.' },
    { num: '2', title: 'Configure', desc: 'Set custom permission filters and domain focus.' },
    { num: '3', title: 'Index', desc: 'Our agents map your private knowledge graph.' },
    { num: '4', title: 'Iterate', desc: 'Go live with your team. 90-day free licensing.' }
  ];

  return (
    <section className="bg-deep-dark py-24 px-6 border-y border-zinc-900">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-white mb-16">Deployment in Days, not Months</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Connecting line for desktop */}
          <div className="absolute top-6 left-0 hidden h-[1px] w-full bg-zinc-800 md:block" />
          
          {steps.map((step) => (
            <div key={step.num} className="relative space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ember-orange text-lg font-bold text-black shadow-lg shadow-ember-orange/20">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm text-zinc-400 font-sans leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-24 px-6 font-sans">
      <div className="mx-auto max-w-4xl relative overflow-hidden rounded-card border-2 border-ember-orange bg-deep-slate p-8 md:p-16">
        <div className="absolute top-0 right-0 bg-ember-orange px-8 py-2 rounded-bl-card text-[10px] font-mono font-bold uppercase tracking-widest text-black">
          90-Day Free Pilot
        </div>
        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1 space-y-6 text-white">
            <h3 className="text-4xl md:text-5xl font-serif tracking-tight">Enterprise</h3>
            <p className="text-lg text-zinc-400">Full integration, custom indexing, and white-glove security setup for your entire firm.</p>
            <ul className="space-y-4">
              {['Unlimited users & documents', 'Custom API integrations', 'Usage-based compute credits'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-ember-orange" />
                  <span className="text-zinc-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex min-w-[280px] flex-col items-center justify-center rounded-card border border-zinc-800 bg-black/40 p-8 text-center backdrop-blur-sm">
            <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Starting at</span>
            <span className="mb-8 text-5xl font-serif font-bold text-white">$Custom</span>
            <button className="w-full rounded-full bg-ember-orange py-4 font-bold text-black transition-all hover:bg-orange-400 active:scale-95 shadow-lg shadow-ember-orange/10">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="hero-gradient border-t border-zinc-900 bg-hero-purple py-24 px-6 text-center text-white">
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight">
          Turn buried knowledge into firm-wide intelligence.
        </h2>
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <button className="rounded-full bg-white px-10 py-5 font-bold text-black transition-all hover:bg-ember-orange active:scale-95">
            Book a Demo
          </button>
          <button className="rounded-full border border-white/30 px-10 py-5 font-bold transition-all hover:bg-white/10 active:scale-95">
            Talk to the Team
          </button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-16 border-t border-zinc-900 font-serif">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold text-ember-orange">Ember</div>
            <p className="max-w-xs text-sm text-zinc-500 leading-relaxed font-sans">
              © 2024 Ember AI. Private Equity Intelligence. Secure & Encrypted.
            </p>
            <div className="flex gap-4 text-zinc-500">
              <a href="#" className="transition-colors hover:text-ember-orange"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="transition-colors hover:text-ember-orange"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 md:mt-0 font-sans text-xs">
            {['Terms of Service', 'Privacy Policy', 'Security Compliance', 'Contact Support'].map((link) => (
              <a key={link} href="#" className="text-zinc-500 transition-colors hover:text-ember-orange">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
