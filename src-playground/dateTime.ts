import { dayOfYear, currentDayOfYear } from 'https://deno.land/std/datetime/mod.ts' // you can check the other package at https://deno.land/std

console.log(dayOfYear(new Date('2020-01-02'))) // count total days from 1 january to given date
console.log(currentDayOfYear()) // count total days from 1 january to current date