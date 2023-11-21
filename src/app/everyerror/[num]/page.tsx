
import DefaultErrorPage from 'next/error'
import Error from 'next/error';
export default function Home() {
  return (
    <main>
      <div>
      Streaming-test
       <Error statusCode={404} />
      </div>
    </main>
  )
}
