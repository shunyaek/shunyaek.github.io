export async function GET(request: Request) {
  return Response.json({
    "message": "Hello, world!",
    "request": await request.text(),
  })
}