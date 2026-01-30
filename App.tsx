import React from 'react';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { About } from './components/About';
import { Differential } from './components/Differential';
import { Services } from './components/Services';
import { Manifesto } from './components/Manifesto';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';

function App() {
  return (
    <main className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <SocialProof />
      <About />
      <Differential />
      <Services />
      <Manifesto />
      <Benefits />
      <Contact />
    </main>
  );
}

export default App;