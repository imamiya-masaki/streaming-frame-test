import { Suspense } from "react";
import { useRouter } from 'next/navigation'


async function SuspenseComponent ({ms}: {ms: string}) {
  const fetched = await fetch(`https://streaming-frame-test.vercel.app/api/?ms=${ms}&is_error=false`)
    const obj = await fetched.json();
    return <div>{obj.response}</div>
}

export default function Home({params}: {params: {ms: string}}) {
  const ms = params.ms;
  return (
    <main>
      <div>
      Streaming-test
      <Suspense fallback={<p>Loading...</p>}>
        <SuspenseComponent ms={ms}/>
      </Suspense>
      </div>
    </main>
  )
}