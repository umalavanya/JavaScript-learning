// topics/operators.js
window.topics = window.topics || {};
window.topics.operators = {
    part: 'Part I',
    title: 'Operators',
    conceptNote: 'Arithmetic, comparison, logical, assignment, ternary, typeof, etc.',
    importantPoints: [
        '▪️ `==` vs `===` (strict equality)',
        '▪️ short-circuit: `&&` / `||`',
        '▪️ exponentiation: `**`',
        '▪️ optional chaining ?. (ES2020)'
    ],
    mcqs: [
        { q: 'What does `3 + "3"` result in?', options: ['6','33','NaN','error'], correct: 1 },
        { q: '0 == false → ?', options: ['true','false'], correct: 0 }
    ],
    practiceCoding: '// use ternary: age >= 18 ? "adult" : "minor"',
    interviewQA: '❓ Q: difference between `==` and `===`? A: `===` no type coercion.'
};