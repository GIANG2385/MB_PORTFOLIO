import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Intersection } from './components/Intersection';
import { Projects } from './components/Projects';
import { BeyondClassroom } from './components/BeyondClassroom';
import { FlowDiagram } from './components/FlowDiagram';
import { ActionPlan } from './components/ActionPlan';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col selection:bg-[#001bb7] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenConnect={() => setIsConnectOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenConnect={() => setIsConnectOpen(true)}
        />
        <About />
        <Intersection />
        <Projects />
        <BeyondClassroom />
        <FlowDiagram />
        <ActionPlan />
        <Roadmap />
      </main>

      {/* Footer */}
      <Footer onOpenConnect={() => setIsConnectOpen(true)} />

      {/* Modals */}
      <ContactModal
        isOpen={isConnectOpen}
        onClose={() => setIsConnectOpen(false)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
