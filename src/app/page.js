"use client";
import CodeEditor from "./components/CodeEditor";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx"
import Documentation from './components/Documentation/Documentation'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <SpeedInsights/>
      <ScrollProgressBar></ScrollProgressBar>
      <Navbar/>
      <Hero/>
    
      <CodeEditor />
      <Documentation/>
      <Footer/>
    </>
  );
}
