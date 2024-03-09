"use client";
import CodeEditor from "./components/CodeEditor";

import Togglemode from "./components/Togglemode";

export default function Home() {
  return (
    <>
      <Togglemode></Togglemode>
      <CodeEditor></CodeEditor>
    </>
  );
}
