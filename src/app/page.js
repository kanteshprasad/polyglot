"use client";
import CodeEditor from "./components/CodeEditor";
import ScrollProgressBar from "./components/ScrollProgressBar"
import Togglemode from "./components/Togglemode";

export default function Home() {
  return (
    <>
      <ScrollProgressBar></ScrollProgressBar>
      <Togglemode></Togglemode>
      <CodeEditor></CodeEditor>

    </>
  );
}
