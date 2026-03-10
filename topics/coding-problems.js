// topics/coding-problems.js
window.codingProblems = window.codingProblems || {
    beginner: [
        {
            id: 'reverse-string',
            title: 'Reverse a String',
            description: 'Write a function that reverses a string.',
            startingCode: 'function reverseString(str) {\n  // Your code here\n}',
            testCases: [
                { input: 'hello', expected: 'olleh' },
                { input: 'JavaScript', expected: 'tpircSavaJ' }
            ],
            solution: 'function reverseString(str) {\n  return str.split("").reverse().join("");\n}'
        },
        {
            id: 'fizzbuzz',
            title: 'FizzBuzz',
            description: 'Print numbers 1-100. For multiples of 3, print "Fizz". For multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".',
            startingCode: 'function fizzBuzz() {\n  // Your code here\n}',
            solution: 'function fizzBuzz() {\n  for(let i=1; i<=100; i++) {\n    if(i%15===0) console.log("FizzBuzz");\n    else if(i%3===0) console.log("Fizz");\n    else if(i%5===0) console.log("Buzz");\n    else console.log(i);\n  }\n}'
        }
    ],
    
    intermediate: [
        {
            id: 'palindrome',
            title: 'Check Palindrome',
            description: 'Check if a string is a palindrome (reads the same forwards and backwards).',
            startingCode: 'function isPalindrome(str) {\n  // Your code here\n}',
            testCases: [
                { input: 'racecar', expected: true },
                { input: 'hello', expected: false }
            ]
        }
    ]
};