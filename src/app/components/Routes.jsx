'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <>
    <button type="button" onClick={() => router.push('/hindiDoc')}>
      Dashboard
    </button>
    <button type="button" onClick={() => router.push('/kannadaDoc')}>
    Dashboard
  </button>
  <button type="button" onClick={() => router.push('/teluguDoc')}>
  Dashboard
</button></>
  )
}