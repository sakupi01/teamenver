import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')
  try {
    const res = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=${query}+not:insecure+not:unstable+boost-exact:false&size=5&quality=0.0&maintenance=1.0&popularity=1.0`,
    )
    const data = await res.json()

    return NextResponse.json({ data })
  } catch (error) {
    console.log(error)
  }
}
