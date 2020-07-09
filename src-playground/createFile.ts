const encode = new TextEncoder()

const greetText = encode.encode('Hello World\nMy name is Noric!')

await Deno.writeFile('greet.txt', greetText)