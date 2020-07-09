import { serve } from 'https://deno.land/std/http/server.ts'

const port = 8000
const s = serve({ port: port })
console.log(`Server running on port : ${port}`)

for await (const req of s) {
    req.respond({ body: 'Hello World\n' })
}