// permission is necessary
const file = await Deno.open('sample.txt')
await Deno.copy(file, Deno.stdout)

/*
if you run "deno run without --allow-read flag", it will give this error:

error: Uncaught PermissionDenied: read access to "sample.txt"
*/