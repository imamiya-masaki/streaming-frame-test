import { Suspense } from "react";

async function SuspenseComponent () {
  const fetched = await fetch("http://localhost:3000/api/?ms=500&isError=false")
  const obj = await fetched.json();
  return <div>{obj.response}</div>
}

export default function Home() {
  return (
    <main>
      <div>
      <Suspense fallback={<p>Loading...</p>}>
        <SuspenseComponent />
      </Suspense>
      </div>
    </main>
  )
}
