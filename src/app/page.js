"use client";
import CodeEditor from "./components/CodeEditor";
import ScrollProgressBar from "./components/ScrollProgressBar"
import Togglemode from "./components/Togglemode";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <>
      <ScrollProgressBar/>
      <Navbar/>
      <Hero/>
      <Togglemode/>
      <CodeEditor />

    </>
  );
}
