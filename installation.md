### # Windows

#### Install Scoop Package Manager
Open PowerShell
```
\system32> Set-ExecutionPolicy RemoteSigned -scope CurrentUser

\system32> iwr -useb get.scoop.sh | iex
```

<hr>

Install Deno
```
scoop install deno
```

<hr>

Try running a simple program:

```
deno run https://deno.land/std/examples/welcome.ts
# you can check other examples at https://deno.land/std
```

```
deno run https://deno.land/std/http/file_server.ts 

# required --allow-read & --allow-net flag, so it will look like this:
deno run --allow-read --allow-net https://deno.land/std/http/file_server.ts

# install it to local machine
deno install --allow-read --allow-net https://deno.land/std/http/file_server.ts

## and run it
> cd .deno\bin\
> file_server
```

<hr>

Or a more complex one:
```
import { serve } from "https://deno.land/std@0.60.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```
