
import DefaultErrorPage from 'next/error'

export default function Home() {
  return (
    <main>
      <div>
      Streaming-test
       <DefaultErrorPage statusCode={404} />
      </div>
    </main>
  )
}
