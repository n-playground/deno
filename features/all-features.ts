// feature 1: written inside typescript
// feature 2: import script from url
import { serve } from 'https://deno.land/std/http/server.ts'

// feature 3: need permission --allow-net
const port = 8000
const server = serve({ port })
console.log(`Server running on port ${port}`)

// feature 4: top level await
for await(const req of server) {
    const todo = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json())
    req.respond({ body: JSON.stringify(todo, undefined, 4) })
}