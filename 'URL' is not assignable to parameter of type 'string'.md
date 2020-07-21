How to fix `'URL' is not assignable to parameter of type 'string'.` error

Detailed errors: 
```
error: TS2345 [ERROR]: Argument of type 'string | URL' is not assignable to parameter of type 'string'.
  Type 'URL' is not assignable to type 'string'.
  return new URL(url).pathname
                 ~~~
    at https://deno.land/std/path/win32.ts:917:18

TS2345 [ERROR]: Argument of type 'string | URL' is not assignable to parameter of type 'string'.
  Type 'URL' is not assignable to type 'string'.
  return new URL(url).pathname;
                 ~~~
    at https://deno.land/std/path/posix.ts:438:18

Found 2 errors.
```

How to fix:
- `deno cache reload your-cached-files.ts`

<br><br>
For more detail about reloading modules : https://deno.land/manual/linking_to_external_code/reloading_modules
