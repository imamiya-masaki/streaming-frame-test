import { Suspense } from "react";
import { useRouter } from 'next/router'


async function SuspenseComponent ({ms}: {ms: string}) {
  const fetched = await fetch(`https://streaming-frame-test.vercel.app/api/?ms=${ms}&is_error=false`)
    const obj = await fetched.json();
    return <div>{obj.response}</div>
}

export default function Home() {
  const router = useRouter()
  const ms = router.query.ms as string;
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

export const dynamic = 'force-dynamic'