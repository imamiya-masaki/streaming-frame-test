import { Suspense } from "react";


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
      sync-test
      <SuspenseComponent ms={ms}/>
      </div>
    </main>
  )
}

export const dynamic = 'force-dynamic'