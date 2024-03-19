"use client";
import CodeEditor from "./components/CodeEditor";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx"
import Documentation from './components/Documentation/Documentation'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <>
      <ScrollProgressBar></ScrollProgressBar>
      <Navbar/>
      <Hero/>
    
      <CodeEditor />
      <Documentation/>
    </>
  );
}
