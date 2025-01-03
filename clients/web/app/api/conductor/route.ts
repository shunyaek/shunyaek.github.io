export async function GET(request: Request) {
  return Response.json({
    "message": "Conductor by shunyaek",
    "request": await request.text(),
  })
}