export default function Home() {
  return (
    <main>
      <div>
        <h1>Streaming Test</h1>
        <p>`/streaming/[ms]` で、正常なstreaming-test</p>
        <p>`/streaming-cache/[ms]` で、正常なstreaming-test (cache)</p>
        <p>`/error/[ms]` で、ms時間サーバーレスポンスを待機してエラーを吐くstreaming-test</p>
        <p>`/error-cache/[ms]` で、ms時間サーバーレスポンスを待機してエラーを吐くstreaming-test (cache)</p>
        <p>`/everyerror/[ms]` で、エラーを吐くsuspenseなしのページ (msは関係ない)</p>
      </div>
    </main>
  )
  }