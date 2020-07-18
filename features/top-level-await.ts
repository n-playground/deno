const getPromise = () => new Promise((resolve, reject) => resolve('123'))

const result = await getPromise()
console.log(result)

/* 
if you run with node it will get this error

const result = await getPromise()
               ^^^^^
SyntaxError: await is only valid in async function
*/