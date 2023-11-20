import { Suspense } from "react";

async function SuspenseComponent () {
  const fetched = await fetch("https://streaming-frame-test.vercel.app/api/?ms=500&is_error=false")
    const obj = await fetched.json();
    return <div>{obj.response}</div>
}

export default function Home() {
  return (
    <main>
      <div>
      Streaming-test
      <Suspense fallback={<p>Loading...</p>}>
        <SuspenseComponent />
      </Suspense>
      </div>
    </main>
  )
}
