import { Suspense } from "react";

function SuspenseComponent () {
  throw Error ("error")
  return <div>error</div>
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
