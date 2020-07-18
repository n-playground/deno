//  full typescript support

let myName: string;

let hello = (name: string): string => {
    return `Hello from ${name}`
}

myName = 'codeholic'
console.log(hello(myName))