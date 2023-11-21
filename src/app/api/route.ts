
async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const ms = Number(searchParams.get('ms'))
    const isError = searchParams.get('is_error') ?? false
    
    await sleep(ms)
    if (isError === "true") {
      return Response.error()
    } else {
      return Response.json({"response": "ok!hogehoge"})
    }
  }