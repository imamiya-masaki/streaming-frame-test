import { Suspense } from "react";
async function SuspenseComponent ({ms}: {ms: string}) {
  const fetched = await fetch(`https://streaming-frame-test.vercel.app/api/?ms=${ms}&is_error=false`)
  if (fetched.ok) {
    const obj = await fetched.json();
    return <div>{obj.response}</div>
  } else {
    if ("true" === "true") { // 自明なtrue
      console.log('error発生')
      throw Error("エラー実行")
    }
    return <div>ng</div>
  }
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

export const dynamic = 'force-dynamic'