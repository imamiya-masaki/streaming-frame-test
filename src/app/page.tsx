export default function Home() {
  return (
    <main>
      <div>
        <h1>Streaming Test</h1>
        <p>`/dynamic/[ms]` で、正常なstreaming-test</p>
        <p>`/error/[ms]` で、異常なstreaming-test</p>
        <p>`/everyerror/[ms]` で、常に異常なstreaming-test (msは関係ない)</p>
      </div>
    </main>
  )
  }