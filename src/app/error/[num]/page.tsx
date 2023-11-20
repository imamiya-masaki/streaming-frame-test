import { Suspense } from "react";
import DefaultErrorPage from 'next/error'
async function SuspenseComponent () {
  const fetched = await fetch("https://streaming-frame-test.vercel.app/api/?ms=500&is_error=true")
  if (fetched.ok) {
    const obj = await fetched.json();
    return <div>{obj.response}</div>
  } else {
    return <DefaultErrorPage statusCode={404}/>
  }
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
