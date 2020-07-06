### # Windows

#### Install Scoop Package Manager
Open PowerShell
```
\system32> Set-ExecutionPolicy RemoteSigned -scope CurrentUser

\system32> iwr -useb get.scoop.sh | iex
```

Install Deno
```
> scoop install deno
```

Try running a simple program:

```
> deno run https://deno.land/std/examples/welcome.ts
```

Or a more complex one:
```
import { serve } from "https://deno.land/std@0.60.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```
